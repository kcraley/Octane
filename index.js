import logger from 'winston';
import chalk from 'chalk';
import moment from 'moment';

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

if (process.env.NODE_ENV === 'prod') {
  logger.info(chalk.cyan(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Booting in production environment...`));
  require('./dist/');
} else {
  logger.info(chalk.cyan(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Booting in development environment...`));
  require('babel-register');
  require('./src/discordie.js');
}
