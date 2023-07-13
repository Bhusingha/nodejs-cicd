import { Max ,Min, Avg } from "../src/index"
import { describe } from "node:test"

describe("test Max", () => {
    test("", () => {
        expect(Max([1])).toEqual(1)
    })
})