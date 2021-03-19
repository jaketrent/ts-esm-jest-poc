# TS, ESM, Jest, Storybook, React Combo POC

Thanks to mtornwall for the original config that allows TS, ESM and Jest

## Tech stack

- TypeScript - src
- ES Module - destination compilation
- Jest - testing
- React - ui component library
- Storybook - visual component development

## Features

- package.json 
  - main=dist/index.js
  - type=module 
- src/
  - *.ts files
  - file extensions in relative imports 
- src/__test__
  - *.test.ts files
  - no file extensions, breaks jest
  - [jest-ts-webcompat-resolver](https://www.npmjs.com/package/jest-ts-webcompat-resolver) custom resolver can provide work-around 
- src/stories/
  - result of npx sb init, then pared down, moved around
  - no file extensions, breaks storybook
  - surely there's a workaround; not yet found
- dist/
  - [ESM requires file extensions on relative imports](https://nodejs.org/api/esm.html#esm_terminology)
  - typescript-esm rewrites relative imports with file extensions
- jest.config.js
  - uses ts-jest
- tsconfig.js
  - module=ES2020 - module system
  - target=ES5 - other language features
