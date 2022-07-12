const Discord = require("discord.js");
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
        const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Here is a list of commands you can use')
      .setDescription('For a more detailed aproach click [here](https://utilities-pcbbd.pcbbd.repl.co/commands.html)')
      .addFields([
        {
          name: `:ping_pong: Ping`,
          value: `\`${prefix}ping\` - Gives you the websocket 
ping and delay rate`,
          inline: true
        },
        {
          name: `:point_right: Boop`,
          value: `\`${prefix}boop\` - Replies with beep`,
          inline: true
        },
        {
          name: `:question: Ask Question`,
          value: `\`${prefix}ask + <question/text>\` - Replies with yes or no (random)`,
          inline: true
        },
        {
          name: `:frame_photo: avatar`,
          value: `\`${prefix}avatar + <@user(optional)>\` - Replies with the avatar of an user and various formats to download`,
          inline: true
        },
        {
          name: `:robot: About the bot`,
          value: `\`${prefix}about\` - Replies with information about the bot`,
          inline: true
        }
      ])

    return message.reply({ embeds: [helpEmbed] });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};