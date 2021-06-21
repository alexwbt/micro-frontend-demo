const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireStyledComponents(config, env, {
        ssr: false,
        displayName: false,
        filename: false,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
        namespace: 'container'
    });
    return config;
}
