import {test as base, request, APIRequestContext} from '@playwright/test'
import {UserApi} from '../api/UserApi'

type APIFixtures = {
    apiContext : APIRequestContext
    userApi:UserApi
}

export const test = base.extend<APIFixtures>({
    apiContext:async ({}, use) => {

        const apiContext =  await request.newContext({
            baseURL: process.env.REQRES_BASE_URL,
            extraHTTPHeaders: {
                'x-api-key': process.env.REQRES_API_KEY!,
                'Content-type': 'application/json'
            }
        })

        await use(apiContext)
        await apiContext.dispose()
    },
    
    userApi: async ({apiContext}, use) => {

        const userApi = new UserApi(apiContext)
        await use(userApi)
    }
})

export {expect} from '@playwright/test'