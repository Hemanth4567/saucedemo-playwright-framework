import {test, expect} from '../../fixtures/API'

test('Get user', async ({ userApi }) => {
    const response = await userApi.getUser(2)

    console.log('Status: ',response.status())
    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    console.log('Response: ',responseBody)
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.first_name).toBe('Janet')
    expect(responseBody.data.last_name).toBe('Weaver')
})