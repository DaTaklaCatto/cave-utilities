const Discord = require("discord.js");
const Canvas = require("canvas")
const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const background = "https://i.imgur.com/baFMgyc.png"
const { registerFont, createCanvas } = require('canvas')

registerFont('./structures/assets/fonts/drivecorps.ttf', { family: 'font' })

module.exports = {
	name: "guildMemberAdd",

	/**
	 * @param {Discord.Client} client 
	 * @param {Discord.GuildMemberAdd}
	 */

	async execute(client, member) {
		try {		
       const dim = {
      height: 675,
      width: 1200,
      margin: 50
    }

    const av = {
      size: 256,
      x: 480,
      y: 170
    }

    const generateImage = async (member) => {
      let userTag = member.user.tag
      let memberCount = member.guild.memberCount
      let username = member.user.username
      let discrim = member.user.discriminator
      let avatarURL = member.user.displayAvatarURL({ format: "png", dynamic: false, size: av.size })

      const canvas = Canvas.createCanvas(dim.width, dim.height)
      const ctx = canvas.getContext("2d")

      // draw in the background
      const backimg = await Canvas.loadImage(background)
      ctx.drawImage(backimg, 0, 0)

      const avimg = await Canvas.loadImage(avatarURL)
      ctx.save()

      ctx.beginPath()
      ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.clip()

      ctx.drawImage(avimg, av.x, av.y)
      ctx.restore()

      // write in text
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      // draw in Welcome
      ctx.font = "100px font"
      ctx.fillText("Welcome", dim.width / 2, dim.margin + 70)

      // draw in the username
      ctx.font = "70px font"
      ctx.fillText(userTag, dim.width / 2, dim.height - dim.margin - 125)

      // draw in to the server
      ctx.font = "50px font"
      ctx.fillText("You are the " + memberCount + "th member", dim.width / 2, dim.height - dim.margin - 50)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
      return attachment
    }


    const img = await generateImage(member)
if (member.guild.id === "856191026058625044") {
      client.channels.cache.get("950355725509607474").send({      content: `Welcome ${member}, to view shop go to the **MARKETPLACE** category. And for information go to <#950355835542974494> `,
      files: [img]})
         }
		} catch (e) {
			console.log(String(e.stack).bgRed);
		}
	}
}