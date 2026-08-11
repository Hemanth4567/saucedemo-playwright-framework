import { test, expect } from '../fixtures/Pages'
import { users } from '../test-data/Users'

test.describe('Products page', () => {
    test.beforeEach(async ({loginPage,productsPage}) => {

        await loginPage.open()
        await loginPage.login(users.standardUser.username, users.standardUser.password)


        // Confirms the precondition before product actions begin
        await productsPage.verifyProductsPageIsOpen()
    })

    test('user can add backpack to cart', async ({ page, productsPage }) => {


        // Actual product-selection test
        await productsPage.addBackpackToCart()

        //Verifying if the cart has the products added
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')
    })

    test('user can remove backpack from the cart', async ({ page, productsPage}) => {

        await productsPage.addBackpackToCart()

        // Actual product-removal test
        await productsPage.removeBackpackFromCart()

        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible()
    })
})