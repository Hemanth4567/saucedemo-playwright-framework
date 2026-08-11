import {test, expect} from '../fixtures/Pages'
import {users} from '../test-data/Users'

test('standard user can login',async ({page, loginPage}) => {
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)
})

test('user cannot log in with invalid credentials', async ({page, loginPage}) => {
    await loginPage.open()
    await loginPage.login(users.invalidUser.username,users.invalidUser.password)
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match')
})

