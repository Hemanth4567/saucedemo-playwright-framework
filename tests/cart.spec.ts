import {test} from '../fixtures/Pages'
import {users} from '../test-data/Users'


test('user can view backpack in cart', async ({loginPage,productsPage,cartPage}) =>{

    //Preconditions
    await loginPage.open()
    await loginPage.login(users.standardUser.username, users.standardUser.password)
    await productsPage.addBackpackToCart()

    //Cart functionnality
    await cartPage.open()
    await cartPage.verifyBackpackIsInCart()
})