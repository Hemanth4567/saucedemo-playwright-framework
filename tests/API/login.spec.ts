import {test, expect} from '@playwright/test'

test('Login and extract token', async ({request}) =>{

    const response = await request.post(
        `{process.env.REQRES_BASE_URL}/api/users`,
        {
            headers: {
                'x-api-key': process.env.REQRES_API_KEY!,
                'Content-type':'application/json'
            },
            data:{
                email:'eve.holt@reqres.in',
                password:'pistol'
            }
        }
    )

    console.log('Status: ', response.status())
    console.log('Reponse: ', await response.json())
})