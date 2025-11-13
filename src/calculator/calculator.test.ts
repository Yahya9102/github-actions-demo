import { add } from "./calculator";
import {describe, it, expect} from "vitest";


describe("testing add function", () => {
    it("Should return the sum of two numbers added", () => {
        expect(add(2,3)).toBe(5)
    })

})

