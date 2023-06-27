type ApplicationResponse = {
    personalDetails: {
        firstName: string,
        lastName: string
    },
    applicationDetails: {
        applicationId: string
    }
}

export const internalApiClient = (() => {

    const createApplication = ({
                                   firstName,
                                   lastName
                               }: { firstName: string, lastName: string }): Promise<ApplicationResponse> => {
        if (firstName === 'error') {
            return Promise.reject({ code: 'under_maintenance' })
        }
        return delay(5000, {
            personalDetails: { firstName: firstName, lastName: lastName },
            applicationDetails: { applicationId: "1234" }
        })
    }

    return {
        createApplication
    }
})()


function delay<T>(ms: number, resolveWith: any): any {
    return new Promise(resolve => setTimeout(resolve, ms, resolveWith));
}
