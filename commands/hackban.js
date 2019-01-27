module.exports.run = (bot, message, args, discord) => {
  let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send("You don't have permission to use this command.");
    bot.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Failed to ban user "+id)
        console.log(err)
      })
      message.channel.send(`Alright, I banned the user ${id}.`)
    }).catch(() => {
      message.channel.send(`There's no user with the ID of ${mid}, please try again. :face_palm:`)
    })
}

module.exports.help = {
  name: "hackban"
}
