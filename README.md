# hex-lite
Fast, bare minimum isomorphic hex library

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

## License

MIT
