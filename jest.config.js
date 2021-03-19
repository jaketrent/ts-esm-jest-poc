export default {
  preset: 'ts-jest',
  // moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mjs'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  // testMatch: [
  //   '**/__tests__/**/*.[j|t]s?(x)',
  //   '**/?(*.)+(spec|test).[mj|j|t]s?(x)',
  //   '**/?(*.)+(spec|test).mjs',
  // ],
  //
  // transformIgnorePatterns: [
  //   'node_modules/(?!react-syntax-highlighter|@storybook)',
  // ],
  // moduleNameMapper: {
  //   'react-syntax-highlighter/dist/esm/(.*)':
  //     'react-syntax-highlighter/dist/cjs/$1',
  // },
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
