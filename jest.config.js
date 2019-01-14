module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ '**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)' ],
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
  globals: {
    'ts-jest': {
      // TODO: https://github.com/kulshekhar/ts-jest/issues/933
      babelConfig: {
        presets: [
          '@babel/preset-react',
          [
            '@babel/preset-env',
            {
              // NOTE: DO NOT ADD modules: false
              targets: {
                ie: '11'
              },
              useBuiltIns: 'entry'
            }
          ]
        ]
      }
    },
  },
};