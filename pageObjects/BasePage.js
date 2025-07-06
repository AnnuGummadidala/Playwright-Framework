const { BASE_URL } = require('../env');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }


}

module.exports = BasePage;
