export function fromUint8Array(uint8Array) {
  const view = new DataView(uint8Array.buffer)
  let hex = ''
  // TODO: optimize this - parse as many groups of 4 as possible, before doing singles
  if (view.byteLength % 4) {
    for (let d = 0, dl = view.byteLength; d < dl; d++) {
      let c = view.getUint8(d).toString(16)
      hex += c.length < 2 ? '0' + c : c
    }
    return hex
  }
  for (let d = 0, dl = view.byteLength; d < dl; d += 4) {
    // which takes longer: variable assignment + conditional or slice?
    hex += ('00000000' + view.getUint32(d).toString(16)).slice(-8);
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
