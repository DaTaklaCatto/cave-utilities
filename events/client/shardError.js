const Discord = require("discord.js");

module.exports = {
  name: "shardError",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, error, id) {
    client.logger(`Shard #${id} Errored`.brightRed);
  }
}