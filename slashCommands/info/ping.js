module.exports = {
  name: "ping",
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
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
      await interaction.reply(`Ping is \`${client.ws.ping}\` ms.`)
    } catch (err) {
      console.log(err)
    }
  }
}