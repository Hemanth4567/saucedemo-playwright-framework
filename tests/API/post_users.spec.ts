import {test, expect} from '../../fixtures/API'


test('Post user', async ({userApi}) => {
    const response = await userApi.createUser(
        'Hemanth',
        'Test Engineer'
    )
    
    console.log('Status: ',response.status())
    console.log('Response:', await response.json())

    expect(response.status()).toBe(201)

    const responseBody = await response.json()
    expect(responseBody.name).toBe('Hemanth')
    expect(responseBody.job).toBe('Test Engineer')
    expect(responseBody.id).toBeTruthy()
    expect(responseBody.createdAt).toBeTruthy()
})