const Discord = require("discord.js");
const config = require(`${process.cwd()}/structures/botconfig/config.json`);

module.exports = {
	name: "guildMemberRemove",

	/**
	 * @param {Discord.Client} client 
	 * @param {Discord.GuildMemberRemove}
	 */

	async execute(client, member) {
		try {		
    if (member.guild.id === "856191026058625044") {
      client.channels.cache.get("996378742962266132").send(`**${member.user.tag}** left the server!`)
         }
		} catch (e) {
			console.log(String(e.stack).bgRed);
		}
	}
}