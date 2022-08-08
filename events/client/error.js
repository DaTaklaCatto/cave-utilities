const Discord = require("discord.js");

module.exports = {
  name: "error",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, error) {
    client.logger(String(error).red.dim);
  }
}