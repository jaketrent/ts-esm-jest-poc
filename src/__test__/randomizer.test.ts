import { giveMeSomeRandomBaby } from '../randomizer'

describe('randomizer', () => {
  it('gives me some random', () => {
    expect(typeof giveMeSomeRandomBaby()).toBe('string')
  })
})

