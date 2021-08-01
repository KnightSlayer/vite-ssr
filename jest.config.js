module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/pages$1",
  },
}
