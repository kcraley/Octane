// Configure dependencies
import chalk from 'chalk';
import Discord from 'discord.io';
import logger from 'winston';
import moment from 'moment';

import auth from './auth/auth.json';
import commands from './commands';

// Initialize Discord bot
let bot = new Discord.Client({
  token: auth.token,
  autorun: true
});
bot.on('ready', function (evt) {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Connected`);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Logged in as: ` + chalk.yellow(bot.username + ' - (' + bot.id + ')'));
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
      let args = message.substring(1).split(' ');
      let cmd = args[0];

      args = args.splice(1);
      switch(cmd) {
          // !ping
          case 'ping':
            bot.sendMessage({
              to: channelID,
              message: 'Pong!'
            });
          break;
          // Just add any case commands if you want to..
        }
    }
});
bot.on('presence', function(user, userID, status, game, event) {
  switch(status){
    case 'online':
      logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] User: ` + user + ` is ` + status.toString `.`);
      break;
    case 'idle':
      logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] User: ` + user + ` has gone ` + status.toString `.`);
      break;
    case 'dnd':
      logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] User: ` + user + ` has gone ` + status.toString `.`);
      break;
    default:
      logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] User: ` + user + ` has gone ` + status.toString `.`);
      break;
  }
});
bot.on('disconnect', function (errMsg, code) {
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] The Discord client has disconnected`);
  logger.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Received (` + errMsg + `) : (` + code `)`);
});
