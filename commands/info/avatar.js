const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av","pfp"],
  usage: '',
  description: "Gives you the avatar of the user.",
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
          let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    let embed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .addField('PNG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true })})`, true)
      .addField('JPG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true })})`, true)
      .addField('WEBP', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true })})`, true)
      .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()
    message.reply({ embeds: [embed] })
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};