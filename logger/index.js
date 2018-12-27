const winston = require('winston');
const options = require('./winstonOptions');

// instantiate a new Winston Logger with the settings.
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
      ],
      exitOnError: false,
});

logger.exceptions.handle(
    new winston.transports.File({ filename: 'exceptions.log' })
);
// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: (message, encoding) => {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};

module.exports = logger;
