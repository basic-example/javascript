module.exports = {
  webpack: (config, options) => {
    config.optimization.minimize = false;
    console.log(config, options);
    return config;
  },
};
