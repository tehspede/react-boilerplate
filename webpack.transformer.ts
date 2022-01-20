/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
const ReactRefreshTypeScript = require('react-refresh-typescript');
const TypescriptPluginStyledComponents =
  require('typescript-plugin-styled-components').default;

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  return {
    before: [
      isDevelopment && ReactRefreshTypeScript(),
      TypescriptPluginStyledComponents(),
    ].filter(Boolean),
  };
};
