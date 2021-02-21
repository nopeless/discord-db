globalThis.assert = require('assert');

require(`dotenv`).config({ path: `${__dirname}/.env` });

globalThis.discordDB = require(`${__dirname}/login`);

module.exports = {
  slow: 75,
  timeout: 2000,
}