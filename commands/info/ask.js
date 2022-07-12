const Discord = require("discord.js");

module.exports = {
  name: "ask",
  aliases: ["question"],
  usage: '',
  description: "Answers with yes or no.",
  category: "info",
  cooldown: 5,
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
      var replies = ['yes', 'no'];
      var rnd = Math.floor(Math.random() * replies.length);

      message.reply(replies[rnd])
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};