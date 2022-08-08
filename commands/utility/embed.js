const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  aliases: ["eb"],
  usage: '',
  description: "Sends in a custom embed",
  category: "utility",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: true,
  toggleOff: false,

  /**
   * @param {Discord.Client} client 
   * @param {Discord.Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, config, embedcolor) {
    try {
      const e1 = new MessageEmbed().setImage("https://media.discordapp.net/attachments/996366342078873720/1003664896354955264/rule.png")
        .setColor("#ffffff")

      const e2 = new MessageEmbed()
        .setTitle(`Welcome to Nadid's Mancave`)
        .setDescription(`This server is a semi family-friendly server. The main cause of this server is to spread the knowledge of programming and at the same time sell some of my code to possible buyers.`)
      .setColor("#ffffff")

      const e3 = new MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/996366342078873720/1003665007873097801/server.png")
        .setColor("#ffffff")
      const e4 = new MessageEmbed()
        .setTitle(`Make sure to follow these basic rules to ensure a better time in this server`)
        .setDescription(`\`1\` Do not ask for roles they are given automatically.
\`2\` Keep swearing and profanity to a minimum. Swears used directed to someone is not allowed.
\`3\` Discussion on political or controversial topics is not allowed.
\`4\` Scamming or robbing people is not allowed. Its just not man...
\`5\` Spam, DM Advertisement and Nitro links are prohibitied.
\`6\` Trolling, Raiding etc is a banable offence.

*Just use you brain don't be stupid* :ok_hand::question:`)
      .setColor("#ffffff")
      const e5 = new MessageEmbed()
      .setImage("https://media.discordapp.net/attachments/996366342078873720/1003665037258391603/marketing.png?width=900&height=270")
      .setColor("#ffffff")

      const e6 = new MessageEmbed()

      .setTitle(" ")
  

      message.channel.send({ content: " ", embeds: [e1,e2,e3,e4,e5] })
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  },
};