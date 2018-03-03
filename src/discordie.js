// Configure dependencies
import chalk from 'chalk';
import Discordie from 'discordie';
import logger from 'winston';
import moment from 'moment';

import auth from './auth/auth.json';
import commands from './commands'

// Initialize and connect Discordie client
let client = new Discordie({autoReconnect: true});
logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + chalk.yellow('Connecting...'));
client.connect(auth);

// On GATEWAY_READY
client.Dispatcher.on('GATEWAY_READY', evt => {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + chalk.green('Logged in as: ' + evt.data.user.username + ' - (' + evt.data.user.id + ')'));
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] JSON object: \n` + JSON.stringify(evt, null, ' '));
});

// On MESSAGE_CREATE
client.Dispatcher.on('MESSAGE_CREATE', evt => {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] New message from: ` + evt.message.author.username);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Message content: ` + evt.message.content);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] JSON object: \n` + JSON.stringify(evt, null, ' '));

  // Check for indicator
  let msg = evt.message.content.split(' ');
  let prefix = msg[0]
  if (prefix[0] == 'Octane' || 'octane') {
    //evt.message.channel.sendMessage('Success!');
    logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Message content: ` + msg);
  }
});

// On MESSAGE_UPDATE
client.Dispatcher.on('MESSAGE_UPDATE', evt => {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Updated message from: ` + evt.data.author.username);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Message content: ` + evt.data.content);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] JSON object: \n` + JSON.stringify(evt, null, ' '));
});

// On PRESENCE_UPDATE
client.Dispatcher.on('PRESENCE_UPDATE', evt => {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] JSON object: \n` + JSON.stringify(evt, null, ' '));
});
