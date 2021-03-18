import { giveMeSomeRandomBaby } from './randomizer'

export function multiply(left: number, right: number): number {
  return left * right
}

export function useSubdep() {
  return giveMeSomeRandomBaby()
}
