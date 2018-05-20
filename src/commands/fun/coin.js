const { Command, SwitchbladeEmbed } = require('../../')

module.exports = class Reverse extends Command {
  constructor (client) {
    super(client)

    this.name = 'coin'
  }

  run (message, args) {
    let face = Math.floor(Math.random())
    if (face === 0) {
      message.channel.send(
        new SwitchbladeEmbed()
          .setDescription(`**${message.author.tag}** flipped a coin and got **HEADS**!`)
      )
    } else {
      message.channel.send(
        new SwitchbladeEmbed()
          .setDescription(`**${message.author.tag}** flipped a coin and got **TAILS**!`)
      )
    }
  }
}
