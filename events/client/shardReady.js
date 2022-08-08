const Discord = require("discord.js");

module.exports = {
  name: "shardReady",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, id) {
    client.logger(`・Shard #${id} Ready`.brightGreen);
  }
}