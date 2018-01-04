export function fromUint8Array(uint8Array) {
  const view = new DataView(uint8Array.buffer)
  const bl = view.byteLength, largeLength = bl - (bl % 4)
  let hex = '', d = 0
  for (; d < largeLength; d += 4) {
    hex += ('00000000' + view.getUint32(d).toString(16)).slice(-8)
  }
  for (; d < bl; d++) {
    let c = view.getUint8(d).toString(16)
    hex += c.length < 2 ? '0' + c : c
  }
  return hex;
}

export function toUint8Array(str) {
  if (str.length % 2) throw new Error(str + 'is not valid hex')
  const sl = str.length, largeLength = sl - (sl % 8)
  const uint8Array = new Uint8Array(sl / 2)
  const view = new DataView(uint8Array.buffer)
  let s = 0
  for (; s < largeLength; s += 8) {
    view.setUint32(s / 8, parseInt(str.substr(s, 8), 16))
  }
  for (; s < sl; s += 2) {
    view.setUint8(s / 2, parseInt(str.substr(s, 2), 16))
  }
  return uint8Array
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
