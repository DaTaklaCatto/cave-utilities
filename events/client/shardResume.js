const Discord = require("discord.js");

module.exports = {
  name: "shardResume",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, id, replayedEvents) {
    client.logger(`Shard #${id} Resumed`.green)
  }
}