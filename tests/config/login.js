console.log(`login`);
let discordDB = {};
try {
  discordDB = require(`${process.cwd()}/`);
} catch (e) {
  console.log(e);
}

module.exports = new discordDB.Client({ TOKEN: process.env.TOKEN });