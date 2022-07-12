const Discord = require("discord.js");

module.exports = {
  name: "warn",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, error) {
    client.logger(String(error).yellow.dim);
  }
}