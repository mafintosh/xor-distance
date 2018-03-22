# xor-distance

Calculate the xor distance between two buffers as a new buffer and compare computed distances with eachother

```
npm install xor-distance
```

[![build status](http://img.shields.io/travis/mafintosh/xor-distance.svg?style=flat)](http://travis-ci.org/mafintosh/xor-distance)

## Usage

``` js
var distance = require('./')

var dist1 = distance(Buffer.from('foo'), Buffer.from('bar'))
var dist2 = distance(Buffer.from('foo'), Buffer.from('baz'))

// the following returns true since the distance between foo and bar
// is greater than the distance between foo and baz
console.log(distance.gt(dist1, dist2))
```

## License

MIT
