import React from "react";
import { internalApiClient } from "../../clients/internal-api.client";
import { Alert, AlertTitle, Box, Button, useToast } from "@chakra-ui/react";
import { Page, PageMainBody } from "../../components/Page";

export const ExpDataFetchWithCustomHook = () => {
    const { submitApplication, error, data, isLoading } = useCreateApplication()
    const toast = useToast()

    React.useEffect(() => {
        if (data) {
            toast({ title: 'Succcess', description: data.applicationId })
        }
    }, [data])

    React.useEffect(() => {
        if (error) {
            toast({ title: 'Error', description: error.message })
        }
    }, [error])

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

const useCreateApplication = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<{ applicationId: string }>()
    const [error, setError] = React.useState<{ message: string }>()
    const submitApplication = async () => {
        try {
            setLoading(true)
            const data = await internalApiClient.createApplication({ firstName: 'John', lastName: 'Doe' })
            setData({ applicationId: data.applicationDetails.applicationId })
        } catch (e) {
            setError({ message: 'Unknown Error' })
        } finally {
            setLoading(false)
        }
    }
    return {
        isLoading, data, error, submitApplication
    }
}