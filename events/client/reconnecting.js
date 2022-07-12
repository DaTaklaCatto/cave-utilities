const Discord = require("discord.js");

module.exports = {
  name: "reconnecting",

  /**
   * @param {Discord.Client} client
   */

  async execute(client) {
    client.logger(`Reconnceting at ${new Date()}.`.bgYellow.black);
  }
}