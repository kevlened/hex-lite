export function fromUint8Array(uint8Array) {
  return uint8Array.reduce((ag, v) => ag += ('00' + v.toString(16)).slice(-2), '')
}

export function toUint8Array(str) {
  var s = 0, sl = str.length, bytes = []
  if (sl % 2) throw new Error('invalid hex:' + str)
  for (;s < sl;s += 2) {
    bytes.push(parseInt(str.substr(s, 2), 16))
  }
  return new Uint8Array(bytes)
}

export function fromBuffer(buffer) {
  return fromUint8Array(new Uint8Array(buffer))
}

export function toBuffer(str) {
  return toUint8Array(str).buffer
}

export default {
  fromUint8Array,
  toUint8Array,
  fromBuffer,
  toBuffer
}
