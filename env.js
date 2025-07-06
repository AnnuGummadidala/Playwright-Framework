const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'dev';
const envFilePath = path.resolve(__dirname, 'env', `${env}.env`);

const result = dotenv.config({ path: envFilePath });
if (result.error) {
  throw result.error;
}

module.exports = {
  BASE_URL: process.env.BASE_URL,
  LOGIN_USERNAME: process.env.LOGIN_USERNAME,
  LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
};