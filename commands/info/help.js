const { MessageEmbed } = require("discord.js");
const prefix = process.env.PREFIX

module.exports = {
  name: "help",
  aliases: ["h"],
  usage: '',
  description: "Gives you the websocket ping of the message.",
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
      const helpEmbed = new MessageEmbed()
      .setTitle(`<:robot:1003197098948313169> Here are the commands you can use for ${client.user.username}`)
      .setDescription(`The prefix for **${client.user.username}** is \`${prefix}\`. You can use commands as such:`)
      .addFields([
        {
          name : `<:info:1003197080929566840> About`,
          value : `**Usage :** \`${prefix}about\`
<:curvearrow:1003197046431416360>Gives you infomation about the bot and its owner.`,
          inline : true
        },
        {
          name : `:grey_question: Ask`,
          value : `**Usage :** \`${prefix}ask + <question>\`
<:curvearrow:1003197046431416360>Replies with yes or no [RANDOM].`,
          inline : true
        },
        {
          name : `:frame_photo: Avatar`,
          value : `**Usage :** \`${prefix}avatar + <mention>\`
<:curvearrow:1003197046431416360>Replies with one's avatar and download links.`,
          inline : true
        }
      ])

      return message.reply({embeds : [helpEmbed]})
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};