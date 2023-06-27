import React from "react";
import { internalApiClient } from "../../clients/internal-api.client";
import { Page, PageMainBody } from "../../components/Page";
import { Alert, AlertTitle, Box, Button, useToast } from "@chakra-ui/react";
import { useMutation } from "./common";

export const ExpDataFetchWithUseMutation = () => {
    const toast = useToast()

    const { mutate: submitApplication, state } = useMutation(
        (data: { firstName: string, lastName: string }) => internalApiClient.createApplication({
            firstName: data.firstName,
            lastName: data.lastName
        }), {
            selectData: (data) => ({ id: data.applicationDetails.applicationId }),
            selectError: (e) => ({ message: 'Unknown error' })
        })

    return (
        <Page>
            <PageMainBody>
                {state.status === 'error' &&
                  <Alert status={'error'}><AlertTitle>{state.error.message}</AlertTitle></Alert>}
                <Button mt={'50px'} onClick={() => submitApplication({ firstName: 'John', lastName: 'Doe' })}
                        isLoading={state.status === 'loading'}>Create
                    application</Button>
                {state.status === 'success' && <Box mt={'50px'}>
                  Response: {state.data.id}
                </Box>}
            </PageMainBody>
        </Page>
    );
}