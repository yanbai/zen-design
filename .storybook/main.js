const path = require('path');
// your app's webpack.config.js
const custom = require('../build/webpack.base.conf.js')
module.exports = {
    webpackFinal: async (config, { configType }) => {
        return { ...config, module: { ...config.module, rules: custom.module.rules } }
    },
    stories: ['../src/**/*.stories.[tj]s'],
}
