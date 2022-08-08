const Discord = require("discord.js");

module.exports = {
  name: "disconnect",

  /**
   * @param {Discord.Client} client
   */

  async execute(client) {
    client.logger(`You have been disconnected at ${new Date()}.`.dim);
  }
}