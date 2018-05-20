const { Command, SwitchbladeEmbed } = require('../../')

module.exports = class Reverse extends Command {
  constructor (client) {
    super(client)

    this.name = 'reverse'
  }

  run (message, args) {
    if (args.length > 0) {
      message.channel.send(
        new SwitchbladeEmbed()
          .setTitle(args.join(' ').split('').reverse().join(''))
      )
    } else {
      message.channel.send(
        new SwitchbladeEmbed(message.author)
          .setTitle('You have to give me something to reverse')
          .setColor(this.client.colors.error)
          .setDescription(`**Usage:** \`${process.env.PREFIX}reverse <text>\``)
      )
    }
  }
}
