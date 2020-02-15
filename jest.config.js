module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Adding this line solved the issue
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  coverageDirectory: 'coverage',
  verbose: true,
  testURL: 'http://localhost/',
};
