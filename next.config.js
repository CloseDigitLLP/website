const webpack = require("webpack");
const nextConfig = {
    reactStrickMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
      );
     return config;
    },
};
module.exports = nextConfig;