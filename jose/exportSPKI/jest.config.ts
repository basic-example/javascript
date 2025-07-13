export default {
  preset: 'ts-jest',
  transform: {
    '^.+/node_modules/jose/.+\\.js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(jose)/)'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules'],
};
