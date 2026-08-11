import {Page, expect} from '@playwright/test'
export class CheckoutPage{
    constructor(private page:Page){}

    async startCheckout(){
        await this.page.locator('[data-test="checkout"]').click()
    }

    async enterCustomerDetails(firstName:string,lastName:string,postalCode:string){
        await this.page.locator('[data-test="firstName"]').fill(firstName)
        await this.page.locator('[data-test="lastName"]').fill(lastName)
        await this.page.locator('[data-test="postalCode"]').fill(postalCode)
        await this.page.locator('[data-test="continue"]').click()
    }

    async finishOrder(){
        await this.page.locator('[data-test="finish"]').click()
    }

    async verifyOrderSuccess(){
        await expect(
            this.page.locator('[data-test="complete-header"]')
        ).toHaveText('Thank you for your order!')
    }
}