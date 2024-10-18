module.exports = {
  clearMocks: true,  
  maxWorkers: 1,
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '!**/__tests__/coverage/**',
    '!**/__tests__/utils/**',
    '!**/__tests__/images/**',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/Mock/" 
  ]
};
