import {test, expect} from '../fixtures/Pages'
import {users} from '../test-data/Users'
import {invalidLoginCases} from '../test-data/Users'

test('standard user can login',async ({page, loginPage}) => {
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)
})
invalidLoginCases.forEach(
    ({name, username, password, expectedError}) => {
        test(`user cannot log in when ${name}`, async ({page, loginPage}) => {
            await loginPage.open()
            await loginPage.login(username, password)
            await expect(page.locator('[data-test="error"]')).toContainText(expectedError)
        })
    }
)


