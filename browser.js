export function fromUint8Array(uint8Array) {
  const view = new DataView(uint8Array.buffer)
  let hex = ''
  const bl = view.byteLength
  const largeLength = bl - (bl % 4)
  let d = 0
  for (; d < largeLength; d += 4) {
    hex += ('00000000' + view.getUint32(d).toString(16)).slice(-8);
  }
  for (; d < bl; d++) {
    let c = view.getUint8(d).toString(16)
    hex += c.length < 2 ? '0' + c : c
  }
  return hex;
}

export function toUint8Array(str) {
  if (str.length % 2) throw new Error(str + 'is not valid hex')
  const bytes = []
  for (let s = 0, sl = str.length; s < sl; s += 2) {
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
