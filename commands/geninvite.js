module.exports.run = (bot, message, args, discord) => {
if (message.author.id == process.env.oid) {
  let guildid = args.join(' ');
  bot.guilds.get(guildid).channels.first().createInvite().then(inv => bot.users.get(process.env.oid).send(`https://discord.gg/${inv.code}`))
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "geninvite"
}

