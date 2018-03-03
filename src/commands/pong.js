// Configure dependencies
import Discordie from 'discordie';

class PongCommand extends Discordie {
  constructor(client) {
    super(client, {
      name: 'pong',
      group: 'random',
      memberName: 'pong',
      description: 'Sends message of pong'
    });
  }

  async run(message, e) {
    e.message.channel.sendMessage('Pong!');
  }
}

module.exports = PongCommand;
