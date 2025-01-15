const isProduction = process.env.NODE_ENV === 'production';

const config = {
  DEV_PORT: 5656,
  API_BASE_URL: isProduction
    ? 'http://localhost:5656'
    : 'http://localhost:5656',
  // Note, here is where you need to change if you are hosting on a differnt place.
  // : 'http://localhost:8080',

  // rn i am setting this to our url, but this could be made into an env variable. not that it changes much tho.
  API_BASE_URL2: isProduction //
    ? 'http://localhost:5656'
    : 'http://localhost:8080'
};
module.exports = config;
