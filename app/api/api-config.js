const env = process.env.NODE_ENV || 'development';

const apiEnvironment = {
  development: {
    api: 'https://time.uro-solution.info/api/',
  },
  production: {
    api: 'https://time.uro-solution.info/api/',
  }
};

module.exports = apiEnvironment[env];
