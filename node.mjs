export function fromUint8Array(uint8Array) {
  return Buffer.from(uint8Array).toString('hex')
}

export function toUint8Array(str) {
  if (str.length % 2) throw new Error('invalid hex:' + str)
  return new Uint8Array(Buffer.from(str, 'hex'))
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
