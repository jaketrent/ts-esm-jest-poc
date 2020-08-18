import { multiply } from "../src/multiply";

describe("multiply", () => {
    it("bloody multiplies", () => {
        expect(multiply(8, 8)).toEqual(64);
    });
});