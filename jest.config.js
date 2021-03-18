export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: {
        // Ignore warning about --esModuleInterop.
        ignoreCodes: [151001],
      },
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
}
