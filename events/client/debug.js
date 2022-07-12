const Discord = require("discord.js");
const config = require(`${process.cwd()}/structures/botconfig/config.json`);

module.exports = {
  name: "debug",

  /**
   * @param {Dicord.Client} client
   */

  async execute(client, info) {
    if (config.events.Enable_debug) {
      client.logger(String(info).grey);
    }

  }
}