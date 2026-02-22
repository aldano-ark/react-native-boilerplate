module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    // Stub binary/font assets that Jest cannot process
    '\\.ttf$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@packages|react-native-safe-area-context|@react-native-vector-icons)/)',
  ],
};
