import React, { useReducer } from "react";
import { internalApiClient } from "../../clients/internal-api.client";
import { Page, PageMainBody } from "../../components/Page";
import { Alert, AlertTitle, Box, Button } from "@chakra-ui/react";
import { match } from "ts-pattern";

export const ExpDataFetchWithReducer = () => {
    const [state, dispatch] = useReducer(remoteDataReducer<{ id: string },
        { errorMessage: string }>(), { status: 'idle' });

    const submitApplication = async () => {
        try {
            dispatch({ type: 'fetch' })
            const data = await internalApiClient.createApplication({ firstName: 'John', lastName: 'Doe' })
            dispatch({ type: 'success', data: { id: data.applicationDetails.applicationId } })
        } catch (e) {
            dispatch({ type: 'failure', error: { errorMessage: 'Unknown Error' } })
        }
    }
    return (
        <Page>
            <PageMainBody>
                {state.status === 'error' &&
                  <Alert status={'error'}><AlertTitle>{state.error.errorMessage}</AlertTitle></Alert>}
                <Button mt={'50px'} onClick={submitApplication} isLoading={state.status === 'loading'}>Create
                    application</Button>
                {state.status === 'success' && <Box mt={'50px'}>Response: {state.data.id}</Box>}
            </PageMainBody>
        </Page>
    );
}

type RemoteDataState<D, E> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: D }
    | { status: 'error'; error: E };

type RemoteDataAction<D, E> =
    | { type: 'fetch' }
    | { type: 'success'; data: D }
    | { type: 'failure'; error: E }
    | { type: 'reset' };

const remoteDataReducer = <D, E>() => (_: RemoteDataState<D, E>, action: RemoteDataAction<D, E>): RemoteDataState<D, E> => {
    switch (action.type) {
        case 'reset':
            return { status: 'idle' };
        case 'fetch':
            return { status: 'loading' };
        case 'success':
            return { status: 'success', data: action.data };
        case 'failure':
            return { status: 'error', error: action.error };
    }
};