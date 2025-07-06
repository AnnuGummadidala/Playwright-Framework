const BasePage = require('./BasePage');

class LoginPage extends BasePage 
{
    constructor(page)
    {
        super(page);
    }

    get login()
    {
        return this.page.locator('//a[normalize-space()="Log in"]');
    }

    get emailInput()
    {
        return this.page.locator('#username');
    }

    get passwordInput()
    {
        return this.page.locator('#password');
    }

    get loginButton()
    {
        return this.page.locator('#signInBtn');
    }


    async loginToApplication(email, password)
    {
        // await this.page.pause(); // Pause to allow manual inspection if needed
        // await this.login.click();
        await this.page.pause();
        await this.emailInput.fill('')
        await this.emailInput.fill(email);
        await this.page.pause();
        await this.passwordInput.fill(password);
        await this.page.pause();
        await this.loginButton.click();
        await this.page.pause();
    }


}


module.exports = LoginPage;