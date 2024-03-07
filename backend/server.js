const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

app.listen(5000, () => {
  logger.info('App server running on: 5000');
});
