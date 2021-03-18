import { multiply, useSubdep } from '../multiply'

describe('multiply', () => {
  it('multiplies', () => {
    expect(multiply(8, 8)).toEqual(64)
  })

  it('uses subdep', () => {
    expect(useSubdep()).toBeDefined()
  })
})
