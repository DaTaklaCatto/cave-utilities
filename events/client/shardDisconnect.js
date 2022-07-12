const Discord = require("discord.js");


module.exports = {
  name: "shardDisconnect",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, event, id) {
    client.logger(`Shard #${id} Disconnected`.brightRed);
  }
}