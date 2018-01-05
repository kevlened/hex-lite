 const hex = {
  toUint8Array(str) {
    if (str.length % 2) throw new Error('invalid hex:' + str)
    return new Uint8Array(Buffer.from(str, 'hex'))
  },
  fromUint8Array(uint8Array) {
    return Buffer.from(uint8Array).toString('hex')
  },
  toBuffer(str) {
    return hex.toUint8Array(str).buffer
  },
  fromBuffer(buffer) {
    return hex.fromUint8Array(new Uint8Array(buffer))
  }
}

hex.default = hex
module.exports = hex
