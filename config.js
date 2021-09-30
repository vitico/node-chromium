'use strict';

const path = require('path');
const config = {
    /**
     * The default CDN URL, used if not overridden by user
     */
    CDN_URL: 'https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/',
    /**
     * The default filesystem path where chromium will be installed.
     */
    get BIN_OUT_PATH() {
        return config.getEnvVar('chromium_out_path') || path.join(__dirname, 'lib', 'chromium');
    },
    /**
     * Gets a configuration parameter from the environment.
     * Will first check for a lowercase variant set via npm config in the format: `npm_config_${name.toLowerCase()}`.
     * If not set then will check the environment for the variable, as provided.
     * @param {string} name The name of the environment variable, case sensitive, conventionally uppercase.
     * @returns {string} The value of the environment variable.
     */
    getEnvVar: name => {
        if (!name) {
            return '';
        }

        return process.env[`npm_config_${name.toLowerCase()}`] || process.env[name] || '';
    }
};
module.exports = config;
