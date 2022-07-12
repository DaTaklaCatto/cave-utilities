const Discord = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["latency"],
  usage: '',
  description: "Gives you the websocket ping of the message.",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Discord.Client} client 
   * @param {Discord.Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, config, embedcolor) {
    try {
      message.reply(`Ping is \`${client.ws.ping}\` ms`)
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};