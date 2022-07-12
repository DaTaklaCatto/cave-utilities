const Discord = require("discord.js");
const colors = require("colors");

const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  shards: 'auto',
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING"
  ],
  presence: {
    activities: [{
      name: `${process.env.PREFIX}help`,
      type: "LISTENING",
    }],
    status: "online"
  }
});

client.setMaxListeners(0);
require('events').defaultMaxListeners = 0;
console.clear();
console.log(`${`Starting The Handlers`.brightGreen}`);
["extraEvents", "clientVariables", "errorHandler", "eventHandler", "commandHandler", "slashCommandHandler", "keepAlive"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on("guildMemberAdd", async(member) => {
    let welcomeRole1 = member.guild.roles.cache.find(role => role.name === 'Profileㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ')
  let welcomeRole2 = member.guild.roles.cache.find(role => role.name === 'Awardsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ')
  let welcomeRole3 = member.guild.roles.cache.find(role => role.name === 'Notificationsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ')

  member.roles.add(welcomeRole1)
  member.roles.add(welcomeRole2)
  member.roles.add(welcomeRole3)
})

client.login(process.env.TOKEN);