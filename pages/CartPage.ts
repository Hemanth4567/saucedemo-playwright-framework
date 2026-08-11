import {Page, expect} from '@playwright/test'

export class CartPage{
    constructor(private page:Page){}

    async open(){
        await this.page.locator('[data-test = "shopping-cart-link"]').click()
    }

    async verifyBackpackIsInCart(){
        await expect(
            this.page.locator('[data-test="inventory-item-name"]')
        ).toHaveText('Sauce Labs Backpack')
    }
}