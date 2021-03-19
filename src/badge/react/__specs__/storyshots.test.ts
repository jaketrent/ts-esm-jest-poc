import path from 'path'
import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots'

// const createNodeMock = () => document.createElement('div')
// const __dirname = path.dirname(new URL(import.meta.url).pathname)
const configPath = path.resolve(__dirname, '../../../../.storybook')

initStoryshots({
  // x TODO: verify configPath
  // x TODO: __dirname fix in esm
  // x TODO: storyshots.test.mjs file
  // x TODO: adjust module in tsconfig to esnext
  // x TODO: https://github.com/storybookjs/storybook/issues/9470#issuecomment-574790318
  // x TODO: https://github.com/storybookjs/storybook/issues/9470#issuecomment-576022225
  // x TODO: rm docs addon from storybook/main
  // TODO: https://github.com/atlassian-labs/storybook-addon-performance/issues/36
  // TODO: pickup: storyshots are a problem here. They trigger unexpected token errors. Removed
  // first, then just readded to work on this puzzle for DS. Try again on Mon
  configPath,
  framework: 'react',
  // test: snapshotWithOptions({ createNodeMock })
  test: snapshotWithOptions(),
})
