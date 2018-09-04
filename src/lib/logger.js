// Import dependencies
import moment from 'moment';
import winston from 'winston';

// Configure winston settings
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    colorize: true
});
winston.level = 'debug';

function info(message) {
  winston.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + message);
}

function warn(message) {
  winston.warn(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + message);
}

function error(message) {
  winston.error(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + message);
}

function cmd(message) {
  winston.debug(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + message);
}

export default {
  info,
  warn,
  error,
  cmd
};
