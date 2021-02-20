const Discord = require(`discord.js`);

class DiscordDBClient extends Discord.Client {
  constructor(options) {
    super(options);
    // custom options as well
  }
  // create a map of viewable channels (internal cache)
}

class DiscordDB {
  constructor(options) {
    this.token = options.token;
    this.client = new DiscordDBClient();
  }
}
