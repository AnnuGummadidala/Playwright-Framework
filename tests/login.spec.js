const {test, expect} = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const {LOGIN_USERNAME, LOGIN_PASSWORD} = require('../env');

console.log('USERNAME loaded from env:',  LOGIN_USERNAME);
console.log('Password loaded from env:',   LOGIN_PASSWORD);


test('Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    
    // Navigate to the base URL
    await loginPage.goto();
    
    // Pause to allow manual inspection if needed
    
    // Perform login
    await loginPage.loginToApplication(LOGIN_USERNAME, LOGIN_PASSWORD);
    
    // Verify successful login by checking the URL
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
});