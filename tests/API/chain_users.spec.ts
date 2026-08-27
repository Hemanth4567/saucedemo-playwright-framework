import {test, expect} from '../../fixtures/API'

test('Api Chaining', async ({userApi}) => {
    const response = await userApi.createUser(
        'Hemanth',
        'Test engineer'
    )
    const responseBody = await response.json()
    const userId = responseBody.id
    console.log('Post status: ', response.status())
    console.log('Extracted id: ', userId)

    const updateResponse = await userApi.updateUser(
        Number(userId),
       'Senior Test Engineer',
    )
    expect(updateResponse.status()).toBe(200)
    const updateReponseBody = await updateResponse.json()  

    console.log('Patch Status: ', updateResponse.status())
    console.log('Response: ',updateReponseBody)
    expect(updateReponseBody.job).toBe('Senior Test Engineer')
    expect(updateReponseBody.updatedAt).toBeTruthy()
})