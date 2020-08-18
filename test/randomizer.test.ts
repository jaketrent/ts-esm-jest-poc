import { giveMeSomeRandomBaby } from "../src/randomizer";

describe("randomizer", () => {
    it("gives me some random", () => {
        expect(typeof giveMeSomeRandomBaby()).toBe("string");
    });
});