
const path = require('path');

const options = {
  file: {
    level: 'info',
    filename:  path.join(__dirname, '../logger/logs/app.log'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
   
  },
};

module.exports = options;