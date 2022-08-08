const config = require("../botconfig/config.json");
const { MessageEmbed} = require("discord.js");

/**
 * @param {Discord.Client} client
 */

module.exports = async (client) => {
  process.on('beforeExit', (code) => {
    console.log('⚠️・[AntiCrash] | [BeforeExit_Logs] | [Start]・⚠️'.yellow.dim);
    console.log(code);
    console.log('⚠️・[AntiCrash] | [BeforeExit_Logs] | [End]・⚠️'.yellow.dim);
  });
  process.on('exit', (error) => {
    console.log('⚠️・[AntiCrash] | [Exit_Logs] | [Start] ⚠️'.yellow.dim);
    console.log(error);
    console.log('⚠️・[AntiCrash] | [Exit_Logs] | [End]・⚠️'.yellow.dim);
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('⚠️・[AntiCrash] | [MultipleResolves_Logs] | [start]・⚠️'.yellow.dim);
    console.log('⚠️・[AntiCrash] | [MultipleResolves_Logs] | [end]・⚠️'.yellow.dim);
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.log('⚠️・[AntiCrash] | [UnhandledRejection_Logs] | [start]・⚠️'.yellow.dim);
    console.log(reason);
    console.log('⚠️・[AntiCrash] | [UnhandledRejection_Logs] | [end]・⚠️'.yellow.dim);

    const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
    if (errorLogsChannel) {
      errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({
              dynamic: true
            }),
          })
          .setColor("RED")
          .setTitle(`${client.allEmojis.x} An Error Occured:`)
          .setDescription(`\`\`\`${reason}\`\`\``)
          .setTimestamp()
        ]
      })
    }

  });
  process.on('rejectionHandled', (promise) => {
    console.log('⚠️・[AntiCrash] | [RejectionHandled_Logs] | [Start]・⚠️'.yellow.dim);
    console.log(promise);
    console.log('⚠️・[AntiCrash] | [RejectionHandled_Logs] | [End]・⚠️'.yellow.dim);
  })
  process.on("uncaughtException", (err, origin) => {
    console.log('⚠️・[AntiCrash] | [UncaughtException_Logs] | [Start]・⚠️'.yellow.dim);
    console.log(err);
    console.log('⚠️・[AntiCrash] | [UncaughtException_Logs] | [End]・⚠️'.yellow.dim);
  });
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('⚠️・[AntiCrash] | [UncaughtExceptionMonitor_Logs] | [Start]・⚠️'.yellow.dim);
    console.log(err);
    console.log('⚠️・[AntiCrash] | [UncaughtExceptionMonitor_Logs] | [End]・⚠️'.yellow.dim);
  });
  process.on('warning', (warning) => {
    console.log('⚠️・[AntiCrash] | [Warning_Logs] | [Start]・⚠️'.yellow.dim);
    console.log(warning);
    console.log('⚠️・[AntiCrash] | [Warning_Logs] | [End]・⚠️'.yellow.dim);
  });

  client.logger(`・Loaded AntiCrash Module`.brightGreen);
};