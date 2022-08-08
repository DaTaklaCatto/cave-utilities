const Discord = require("discord.js");

module.exports = {
  name: "rateLimit",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, rateLimitData) {
    client.logger(JSON.stringify(rateLimitData).grey.italic.dim);
  }
}