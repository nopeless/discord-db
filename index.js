const Discord = require(`discord.js`);
class Client extends Discord.Client {
  constructor(options) {
    super(options);
    // custom options as well
    console.log(`called`);
    this.a = 3;
  }
  // create a map of viewable channels (internal cache)
}

module.exports = {
  Client,
};