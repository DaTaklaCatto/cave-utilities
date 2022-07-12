const Discord = require("discord.js");

module.exports = {
  name: "shardReconnecting",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, id) {
    client.logger(`Shard #${id} Reconnecting`.brightMagenta);
  }
}