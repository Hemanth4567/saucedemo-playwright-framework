import {test as base, expect} from '@playwright/test' //test as base renames Playwright’s original test to base.
import {LoginPage} from '../pages/LoginPage'          //We need base because we will create a new, extended test 
import {ProductsPage} from '../pages/ProductsPage'    //expect is used for assertions and will be exported later.
import {CartPage} from '../pages/CartPage'            //Imports your four Page Object classes so this fixture file can create them
import {CheckoutPage} from '../pages/CheckoutPage'

type PageFixtures = {   //Defines a TypeScript type named PageFixtures. It tells TypeScript: “These are the extra objects my custom test will provide.”
    loginPage : LoginPage,      //Adds a fixture named loginPage. Its value will be a LoginPage object.
    productsPage : ProductsPage, //Adds three more fixtures. Each name maps to its corresponding Page Object class
    cartPage : CartPage,         
    checkoutPage : CheckoutPage
}


/*
Creates and exports a new custom test
base.extend(...) extends Playwright’s normal test with extra fixtures
<PageFixtures> connects the list of fixture names/types you defined above.
export lets test files import this custom tests
*/


export const test = base.extend<PageFixtures>({


    /*
    Defines how Playwright should create the loginPage fixture
    { page } is Playwright’s built-in browser-tab fixture.
    use is a special Playwright function that gives the created object to the test.
    async is required because fixtures work asynchronously. 
    */
    loginPage:async({page}, use) => {
        await use(new LoginPage(page)) //Creates a LoginPage object using the current test’s browser tab, then supplies it to the test as loginPage
    },

    //Creates a ProductsPage using the same current browser tab and supplies it as productsPage
    productsPage:async ({page},use) => { 
        await use(new ProductsPage(page))
    },

    //Creates and supplies cartPage
    cartPage: async ({page},use) => {
        await use(new CartPage(page))
    },

    //Creates and supplies checkoutPage
    checkoutPage:async ({page},use) => {
        await use(new CheckoutPage(page))
    }
})

export { expect } //Re-exports Playwright’s normal expect

//In short: this file creates a customized version of Playwright’s test that automatically gives your tests the Page Object classes they need