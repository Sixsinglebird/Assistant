const winston = require("winston");

const chatLogger = async (log) => {
  const logger = await winston.createLogger({
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
  await logger.info(log);
};

module.exports = { chatLogger };
