# hex-lite [![NPM](https://img.shields.io/npm/v/hex-lite.svg)](https://npmjs.com/package/hex-lite) [![Build](https://travis-ci.org/kevlened/hex-lite.svg?branch=master)](https://travis-ci.org/kevlened/hex-lite)
isomorphic hex library in 288 bytes

## Install

`npm install hex-lite`

## Usage

```javascript
import hex, { toUint8Array, fromUint8Array, toBuffer, fromBuffer } from 'hex-lite'

hex.toUint8Array('000f10ff000f10')
// new Uint8Array([0,15,16,255,0,15,16])

hex.fromUint8Array(new Uint8Array([0,15,16,255,0,15,16]))
// '000f10ff000f10'

hex.toBuffer('000f10ff000f10')
// ArrayBuffer

hex.fromBuffer(new Uint8Array([0,15,16,255,0,15,16]).buffer)
// '000f10ff000f10'
```

## Can it be smaller?

If you use ES6 imports with tree-shaking, yes! The caveat is you have to change how you import until [some issues get sorted out in bundlers](https://github.com/stereobooster/package.json/issues/2).

```javascript
import { fromUint8Array } from 'hex-lite/dist/hex-list.es.js'
```

## I wanna go fast!

The Node implementation is just a proxy to Node's `Buffer` object to be as fast as possible. The browser implementation optimizes for size, so if you're looking for raw speed, check out [this gist](https://gist.github.com/kevlened/6e6b69c857bb80073e02a52677672a3b).

## License

MIT
