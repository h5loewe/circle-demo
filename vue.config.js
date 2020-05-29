const isProd = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  publicPath: isProd ? '/circle-demo' : '/'
};
