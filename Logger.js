////////////////////////////////////////////////
// imports
const winston = require("winston");

////////////////////////////////////////////////
// ChatLogger function implemented to track the
// requests and responses to the API through the
// terminal
const chatLogger = async (log) => {
  const logger = winston.createLogger({
    // transports and format are the only two
    // needed arguments for this to run.
    transports: [
      new winston.transports.File({
        filename: "logs.log",
        level: "info",
        format: winston.format.combine(
          winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss A",
          }),
          winston.format.json()
        ),
      }),
    ],
  });
  logger.info(log);
};

////////////////////////////////////////////////
// Exports
module.exports = { chatLogger };
