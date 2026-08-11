import {Page, expect} from '@playwright/test'

export class ProductsPage{
    constructor(private page:Page){} //Saves the same browser tab

    async verifyProductsPageIsOpen() //Checks that login redirected to the inventory/products page
    {
        await expect(this.page).toHaveURL(/inventory/)
    }

    async addBackpackToCart() //Clicks Add to cart for Sauce Labs Backpack
    {
        await this.page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click()
    }

    async removeBackpackFromCart() //Clicks Remove from cart for Sauce Labs Backpack
    {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click()
    }

    async openCart() //Opens the shopping cart
    {
        await this.page.locator('[data-test = "shopping-cart-link"]').click()
    }
}