const { Collection } = require("discord.js");
const config = require("../botconfig/config.json");

/**
 * @param {Discord.Client} client 
 */

module.exports = async (client) => {

  client.commands = new Collection();
  client.slashCommands = new Collection();
  client.events = new Collection();
  client.aliases = new Collection();
  client.cooldowns = new Collection();
  client.allEmojis = require("../botconfig/emojis.json");
  client.owners = config.ownerID;

  client.logger(`・Loaded ClientVariables`.brightGreen);
}