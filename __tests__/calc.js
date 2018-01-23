import assert from "assert"
import rewire from "rewire"

const calc = rewire("../src/calc.js")
const sum = calc.__get__("sum")

test("calc:sum should return sum result", () => {
  assert.equal(sum(1, 2), 3)
})
