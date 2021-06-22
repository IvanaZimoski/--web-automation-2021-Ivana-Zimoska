const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')



exports.config = merge(baseConfig.config, {
    maxInstances: 3,
    capabilities: {
        userOne: {
            capabilities: {
                browserName: 'chrome',
            }
        },
        userTwo: {
            capabilities: {
                browserName: 'firefox',
            }
        }
    }
})