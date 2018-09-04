// Import dependencies
import chalk from 'chalk';
import Discordie from 'discordie';

import auth from './auth/auth.json';
import commands from './commands'
import logger from './lib/logger';

// Initialize and connect Discordie client
let client = new Discordie({autoReconnect: true});
logger.info(chalk.yellow('Connecting...'));
client.connect(auth);

// On GATEWAY_READY
client.Dispatcher.on('GATEWAY_READY', evt => {
  logger.info(chalk.green('Logged in as: ' + evt.data.user.username + ' - (' + evt.data.user.id + ')'));
  logger.info(`JSON object: \n` + JSON.stringify(evt, null, ' '));
});

// On MESSAGE_CREATE
client.Dispatcher.on('MESSAGE_CREATE', evt => {
  logger.info(`New message from: ` + evt.message.author.username);
  logger.info(`Message content: ` + evt.message.content);
  logger.info(`JSON object: \n` + JSON.stringify(evt, null, ' '));

  // Check for indicator
  let msg = evt.message.content.toLowerCase().split(' ');
  let prefix = msg[0];
  let cmd = msg.splice(1, msg.length)
  if ((prefix == 'octane')) {

    commands[cmd];
    evt.message.channel.sendMessage('Success!');
    logger.info(`Message content: ` + prefix);
    logger.info(`Message content: ` + cmd);
  }
});

// On MESSAGE_UPDATE
client.Dispatcher.on('MESSAGE_UPDATE', evt => {
  logger.info(`Updated message from: ` + evt.data.author.username);
  logger.info(`Message content: ` + evt.data.content);
  logger.info(`JSON object: \n` + JSON.stringify(evt, null, ' '));
});

// On PRESENCE_UPDATE
client.Dispatcher.on('PRESENCE_UPDATE', evt => {
  logger.info(`` + client.Dispatcher.user);
  logger.info(`JSON object: \n` + JSON.stringify(evt, null, ' '));
});
