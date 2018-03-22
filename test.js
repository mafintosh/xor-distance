var tape = require('tape')
var distance = require('./')
var bufferFrom = require('buffer-from')

tape('distance', function (t) {
  t.same(distance(bufferFrom([1, 0]), bufferFrom([0, 1])), bufferFrom([1, 1]))
  t.same(distance(bufferFrom([1, 1]), bufferFrom([0, 1])), bufferFrom([1, 0]))
  t.same(distance(bufferFrom([1, 1]), bufferFrom([1, 1])), bufferFrom([0, 0]))
  t.end()
})

tape('compare', function (t) {
  t.same(distance.compare(bufferFrom([0, 0]), bufferFrom([0, 1])), -1)
  t.same(distance.compare(bufferFrom([0, 1]), bufferFrom([0, 1])), 0)
  t.same(distance.compare(bufferFrom([1, 1]), bufferFrom([0, 1])), 1)
  t.end()
})

tape('shorthands', function (t) {
  t.ok(distance.lt(bufferFrom([0, 0]), bufferFrom([0, 1])))
  t.ok(distance.eq(bufferFrom([0, 1]), bufferFrom([0, 1])))
  t.ok(distance.gt(bufferFrom([1, 1]), bufferFrom([0, 1])))
  t.end()
})
