// Configure dependencies
import chalk from 'chalk';
import moment from 'moment';
import winston from 'winston';

function log () {
  winston.info(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
}

module.exports = log;
