const Discord = require("discord.js");
const config = require(`${process.cwd()}/structures/botconfig/config.json`);

module.exports = {
  name: "ready",
  once: true,

  /**
   * @param {Discord.Client} client
   */

  async execute(client) {
    try {
      try {
        client.logger(`・Discord Bot is online!`.bold.brightGreen);
      } catch {

      }

      if (config.maintenance_mode) {
        client.user.setActivity(`On Maintenance Mode!`)
      }

    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}