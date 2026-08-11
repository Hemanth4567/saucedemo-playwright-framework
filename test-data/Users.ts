export const users = {
    standardUser:{
        username: 'standard_user',
        password: 'secret_sauce'
    },
}

export const customer = {
    firstName: 'Hemanth',
    lastName:'Kumar',
    postalCode:'560016'
}

export const invalidLoginCases = [
    {
        name: 'usernamr and passwrod are invalid',
        username: 'invalid_user',
        password: 'wrong_password',
        expectedError: 'Username and password do not match'
    },
    {
        name: 'username is missing',
        username: '',
        password: 'wrong_password',
        expectedError: 'Username is required'
    },
    {
        name:'password is missing',
        username:'standard_user',
        password:'',
        expectedError: 'Password is required'
    }
]