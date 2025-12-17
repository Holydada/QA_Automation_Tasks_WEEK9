
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: { '^.+\.(js|jsx)$': 'babel-jest' },
  moduleFileExtensions: ['js','jsx'],
  roots: ['<rootDir>/src']
};
