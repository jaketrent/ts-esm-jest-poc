export default {
  preset: 'ts-jest',
  resolver: '<rootDir>/ts-es-compat-resolver.cjs',
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
