const oid = process.env.oid

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`invisible`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Invisible!")
    .setColor("GREY")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`This command was used at ${new Date}`)
    message.channel.send({ embed })
} else {
  message.channel.send("Nope!")
}
}

module.exports.help = {
  name: "invbot",
  usage: ``,
  info: ``
}
