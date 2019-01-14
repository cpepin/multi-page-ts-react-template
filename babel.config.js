module.exports = function(api) {
  // enable cacheing
  api.cache(true);
  const presets = [
    // transpile JSX
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        // Disable this in tests... we want this transpiled
        // if we aren't using webpack
        modules: false,
        targets: {
          ie: '11'
        },
        // Change polyfill declaration at the entry point to
        // only include necessary functions
        useBuiltIns: 'entry'
      }
    ]
  ];

  return { presets };
}
