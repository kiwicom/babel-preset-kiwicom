// @flow

const presets = [
  [
    '@babel/preset-env',
    {
      modules: 'commonjs',
      targets: {
        node: 'current',
      },
    },
  ],
  [
    '@babel/preset-flow',
    {
      requireDirective: true,
    },
  ],
];

const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
];

module.exports = () => ({
  presets,
  plugins,
});