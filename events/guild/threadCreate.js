const Discord = require("discord.js");

module.exports = {
  name: "threadCreate",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, thread) {
    try {
      if (thread.joinable && !thread.joined) {
        await thread.join();
      }
    } catch (e) {
      console.log(String(e).grey)
    }

  }
}