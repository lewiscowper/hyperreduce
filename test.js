const test = require('tape')
const hyperReduce = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(hyperReduce)
})
