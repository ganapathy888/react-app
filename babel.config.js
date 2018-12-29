module.exports = (api) => {
  api.cache(true);
  const presets = ['@babel/preset-env'];
  const plugins = [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
