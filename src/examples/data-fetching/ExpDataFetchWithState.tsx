import React, { useRef } from "react";
import { internalApiClient } from "../../clients/internal-api.client";
import { Alert, AlertTitle, Box, Button, useToast } from "@chakra-ui/react";
import { Page, PageMainBody } from "../../components/Page";

export const ExpDataFetchWithState = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<{ applicationId: string }>()
    const [error, setError] = React.useState<{ message: string }>()
    const toast = useToast()

    const submitApplication = async () => {
        try {
            setError(undefined)
            setData(undefined)
            setLoading(true)
            const data = await internalApiClient.createApplication({ firstName: 'john', lastName: 'Doe' })
            setData({applicationId: data.applicationDetails.applicationId})
            toast({title: 'Success', description: data.applicationDetails.applicationId})
            setLoading(false)
        } catch (e) {
            setError({ message: 'Unknown Error' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Page>
            <PageMainBody>
                {error && <Alert status={'error'}><AlertTitle>{error.message}</AlertTitle></Alert>}
                <Button mt={'50px'} onClick={submitApplication} isLoading={isLoading}>Create application</Button>
                {data?.applicationId && <Box mt={'50px'}>
                  Response: {data.applicationId}
                </Box>}
            </PageMainBody>
        </Page>
    );
}