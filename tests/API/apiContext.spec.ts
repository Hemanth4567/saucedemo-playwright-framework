import {test, expect, request} from '@playwright/test'

test('API context practice', async () => {

    const apiContext = await request.newContext({
        baseURL: process.env.REQRES_BASE_URL,
        extraHTTPHeaders:{
            'x-api-key': process.env.REQRES_API_KEY!,
            'Content-type': 'application/json'
        }
    })

    const response = await apiContext.get('/api/users/2')
    console.log('Status: ', response.status())
    expect(response.status()).toBe(200)
    await apiContext.dispose()
})