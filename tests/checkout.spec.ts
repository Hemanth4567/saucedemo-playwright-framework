import {test} from '../fixtures/Pages'
import {users,customer} from '../test-data/Users'

test('user can complete an order', async ({loginPage,productsPage,cartPage,checkoutPage}) => {
    //Preconditions
    await loginPage.open()
    await loginPage.login(users.standardUser.username,users.standardUser.password)
    await productsPage.addBackpackToCart()

    //Checkout flow
    await cartPage.open()
    await checkoutPage.startCheckout()
    await checkoutPage.enterCustomerDetails(customer.firstName, customer.lastName, customer.postalCode)
    await checkoutPage.finishOrder()

    //Verification
    await checkoutPage.verifyOrderSuccess()
})