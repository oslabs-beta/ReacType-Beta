const isProduction = process.env.NODE_ENV === 'production';
// this apprears that we are using only the production configs? or is this ok, i actually thnk localhost is ok to listen on??
const serverConfig = {
  DEV_PORT: 5656,
  API_BASE_URL: isProduction
    ? 'http://reactype.us-east-1.elasticbeanstalk.com'
    : 'http://localhost:9999',
  // : 'http://localhost:8080',
  API_BASE_URL2: isProduction
    ? 'http://reactype.us-east-1.elasticbeanstalk.com'
    : 'http://localhost:9999'
};
// module.exports = config;

export default serverConfig;
