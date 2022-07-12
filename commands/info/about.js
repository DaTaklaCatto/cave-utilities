const Discord = require("discord.js");

module.exports = {
  name: "about",
  aliases: ["ab","info"],
  usage: '',
  description: "Gives you information about the bot.",
  category: "info",
  cooldown: 1,
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
      return message.channel.send({content:'JI', flags:64})
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};