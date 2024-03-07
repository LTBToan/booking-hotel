const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

const connectionString ="mongodb+srv://dbUser:dbUserPassword@nodeapi.mtlvl.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        logger.info('Connection establish to MongoDB database successful!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};

module.exports = connectDatabase;
