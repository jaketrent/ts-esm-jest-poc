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
- test/
  - *.test.ts
- src/stories/
  - result of npx sb init
- jest.config.js
  - uses ts-jest
- tsconfig.js
  - module=ES2020 - module system
  - target=ES5 - other language features
