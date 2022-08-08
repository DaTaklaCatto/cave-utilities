const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  usage: '',
  description: "Gives you information about commands",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Discord.Client} client 
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.String[]} args
   */

  async execute(client, interaction, args, Discord, config, embedcolor) {
    try {
      const helpEmbed = new MessageEmbed()
      .setTitle("Test")
      .setDescription("Auto")
      await interaction.reply({content : `Hello there I am ${client.user.username} and my prefix is **${process.env.PREFIX}**`, embeds : [helpEmbed]})
    } catch (err) {
      console.log(err)
    }
  }
}