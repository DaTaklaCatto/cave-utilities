const Discord = require("discord.js");
const moment = require("moment")
const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const { ch_gooodbye, guildId } = require(`${process.cwd()}/structures/botconfig/channels.json`);

module.exports = {
	name: "guildMemberRemove",

	/**
	 * @param {Discord.Client} client 
	 * @param {Discord.GuildMemberRemove}
	 */

	async execute(client, member) {
		try {		
       const leaveEmb = new Discord.MessageEmbed()
      .setTitle(`${member.user.tag} left the server!`)
      .setDescription(`Here is a descriptive information about the user :`)
      .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: false }))
      .addFields({
        name: `__Member Count :__`,
        value: `${member.guild.memberCount} members`,
        inline: true
      }, {
        name: `__User and Id :__`,
        value: `**User Id :** ${member.id}
**User :** <@${member.id}>`,
        inline: true
      }, {
        name: `__Server Member Since :__`,
        value: `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`,
        inline: true
      }, {
        name: `__Discord User Since :__`,
        value: `${moment(member.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.createdAt).startOf('day').fromNow()}`,
        inline: true
      }, {
        name: `__Roles :__`,
        value: `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`,
        inline: false
      }

      )
    if (member.guild.id === "781592241633493003") {
      client.channels.cache.get("825002691670573116").send({ embeds: [leaveEmb] })
         }
		} catch (e) {
			console.log(String(e.stack).bgRed);
		}
	}
}