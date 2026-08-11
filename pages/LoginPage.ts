import {Page} from '@playwright/test'



export class LoginPage{
    constructor(private page: Page){} //saves the browser tab (page) inside the LoginPage class

//Then open() and login() can use that saved tab through this.page to interact with the SauceDemo login page
    async open(){
        await this.page.goto('/')
    }

    async login(username:string, password:string){
        await this.page.locator('[data-test = "username"]').fill(username)
        await this.page.locator('[data-test = "password"]').fill(password)
        await this.page.locator('[data-test = "login-button"]').click()
    }
}