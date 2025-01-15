const isProduction = process.env.NODE_ENV === 'production';

const config = {
  DEV_PORT: 5656,
  API_BASE_URL: isProduction
    ? 'http://reactype.us-east-1.elasticbeanstalk.com/'
    : 'http://localhost:5656',
  // Note, here is where you need to change if you are hosting on a differnt place.
  // : 'http://localhost:8080',
  API_BASE_URL2: isProduction
    ? 'http://reactype.us-east-1.elasticbeanstalk.com/'
    : 'http://localhost:8080'
};
module.exports = config;
