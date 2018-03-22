var distance = require('./')
var bufferFrom = require('buffer-from')

var dist1 = distance(bufferFrom('foo'), bufferFrom('bar'))
var dist2 = distance(bufferFrom('foo'), bufferFrom('baz'))

console.log(distance.gt(dist1, dist2))
