import { useCallback, useMemo, useReducer, useRef } from 'react';
import { useMountedCallback } from './use-mounted';

export type RemoteDataState<D, E> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: D }
  | { status: 'error'; error: E };

export type RemoteDataAction<D, E> =
  | { type: 'fetch' }
  | { type: 'success'; data: D }
  | { type: 'failure'; data: E }
  | { type: 'reset' };

export const remoteDataReducer =
  <D, E>() =>
  (_: RemoteDataState<D, E>, action: RemoteDataAction<D, E>): RemoteDataState<D, E> => {
    switch (action.type) {
      case 'reset':
        return { status: 'idle' };
      case 'fetch':
        return { status: 'loading' };
      case 'success':
        return { status: 'success', data: action.data };
      case 'failure':
        return { status: 'error', error: action.data };
    }
  };

export type useMutationConfig<TData = unknown, TQueryData = TData, TVariables = unknown, TError = unknown> = {
  selectData?: (error: TQueryData) => TData;
  selectError?: (error: unknown) => TError;
  onSuccess?: (data: TData) => Promise<unknown> | void | unknown;
  onError?: (error: TError) => Promise<unknown> | void | unknown;
  onSettled?: (data: TData | null, error: TError | null) => Promise<unknown> | void;
  throwOnError?: boolean;
};

export const useMutation = <TData = unknown, TQueryData = TData, TVariables = unknown, TError = unknown>(
    mutationFn: (variables: TVariables) => Promise<TQueryData | TData>,
    config: useMutationConfig<TData, TQueryData, TVariables, TError> = {}
) => {

  const [state, unsafeDispatch] = useReducer(remoteDataReducer<TData, TError>(), { status: 'idle' });

  const latestMutationFnRef = useRef(mutationFn);
  latestMutationFnRef.current = mutationFn;

  const latestConfigFnRef = useRef(config);
  latestConfigFnRef.current = config;

  const dispatch = useMountedCallback(unsafeDispatch);

  const mutate = useCallback(
    async (variables: TVariables = {} as never): Promise<TData> => {
      const _config = latestConfigFnRef.current;
      const _mutationFn = latestMutationFnRef.current;

      const resolveData = (data?: TQueryData | TData): TData =>
        _config.selectData && typeof data !== 'undefined'
          ? _config.selectData(data as TQueryData)
          : (data as unknown as TData);

      const resolveError = (error?: unknown): TError =>
        _config.selectError && typeof error !== 'undefined' ? _config.selectError(error) : (error as unknown as TError);

      try {
        dispatch({ type: 'fetch' });
        const result = await _mutationFn(variables);
        const resolvedData = await resolveData(result);
        dispatch({ type: 'success', data: resolvedData });
        await _config?.onSuccess?.(resolvedData);
        await _config?.onSettled?.(resolvedData, null);
        return resolvedData;
      } catch (error) {
        console.error(error);
        const resolvedError = resolveError(error);
        dispatch({ type: 'failure', data: resolvedError });
        await _config.onError?.(resolvedError);
        await _config?.onSettled?.(null, resolvedError);
        if (_config.throwOnError) {
          throw error;
        }
        return undefined as never;
      }
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    dispatch({ type: 'reset' });
  }, [dispatch]);

  return useMemo(() => ({ state, reset, mutate }), [mutate, state, reset]);
};
