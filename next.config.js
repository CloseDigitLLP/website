const webpack = require("webpack");
const { withAxiom } = require('next-axiom');

const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
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
    env: {
        apiKey: "AIzaSyDSWru3F2drKh56l4cJGzCGqBAW40fw4Gg",
        authDomain: "close-digit-llp.firebaseapp.com",
        projectId: "close-digit-llp",
        storageBucket: "close-digit-llp.appspot.com",
        messagingSenderId: "378701596349",
        appId: "1:378701596349:web:43a6b2262251d4c84e99d4",
        measurementId: "G-KS4MF284YH"
    }
};
module.exports = withAxiom(nextConfig);