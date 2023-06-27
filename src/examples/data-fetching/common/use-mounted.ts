import * as React from 'react';
const isServer = typeof window === 'undefined';

export function useIsMounted(): () => boolean {
  const mountedRef = React.useRef(false);
  const isMounted = React.useCallback(() => mountedRef.current, []);
  const useEffect = isServer ? React.useEffect : React.useLayoutEffect;

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function useMountedCallback<T extends Function>(callback: T): T {
  const isMounted = useIsMounted();
  return React.useCallback(
    (...args: unknown[]) => {
      if (isMounted()) {
        return callback(...args);
      }
    },
    [callback, isMounted]
  ) as unknown as T;
}
