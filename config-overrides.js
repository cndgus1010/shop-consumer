module.exports = {
  webpack: function (config, env) {
    /* config.module.rules.unshift({
      test: /\.(png|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    }); */
    return config;
  },
};
