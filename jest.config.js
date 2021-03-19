export default {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
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
