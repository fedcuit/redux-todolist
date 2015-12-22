var expect = require('expect')

function counter(state, action) {
  return state;
}

expect(
  counter(0, {
    "type": 'INCREMENT'
  })
).toEqual(1)
