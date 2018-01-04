const assert = require('assert')
const demoArray = new Uint8Array([0,15,16,255,0,15,16])
const demoHex = '000f10ff000f10'

function createBigArray(size) {
  const ab = new ArrayBuffer(size)
  while(size--) {
    ab[size] = 255
  }
  return new Uint8Array(ab)
}
const bigArray = createBigArray(1000003)

function ab2buf(ab) {
  return Buffer.from(new Uint8Array(ab));
}

function run(hex, version) {
  assert.equal(hex.fromUint8Array(demoArray), demoHex,
    `hex.fromUint8Array did not transform correctly:
    ${hex.fromUint8Array(demoArray)} should equal ${demoHex}`)

  assert.ok(Buffer.from(hex.toUint8Array(demoHex)).equals(demoArray),
    'hex.toUint8Array did not transform correctly')

  assert.ok(new Buffer(hex.toUint8Array(hex.fromUint8Array(demoArray)))
    .equals(demoArray),
    'hex.toUint8Array(hex.fromUint8Array()) did not transform correctly')

  assert.equal(hex.fromUint8Array(hex.toUint8Array(demoHex)), demoHex,
    'hex.fromUint8Array(hex.toUint8Array()) did not transform correctly')

  assert.equal(hex.fromBuffer(demoArray.buffer), demoHex,
    'hex.fromBuffer did not transform correctly')

  assert.ok(ab2buf(hex.toBuffer(demoHex)).equals(demoArray),
    'hex.toBuffer did not transform correctly')

  assert.ok(ab2buf(hex.toBuffer(hex.fromBuffer(demoArray.buffer))).equals(demoArray),
    'hex.toBuffer(hex.fromBuffer()) did not transform correctly')

  assert.equal(hex.fromBuffer(hex.toBuffer(demoHex)), demoHex,
    'hex.fromBuffer(hex.toBuffer()) did not transform correctly')

  console.log(`✅ Success for ${version}!`)
  console.log(`⏱ ${version} performance on large array and string:`)

  console.time(`hex.fromUint8Array`)
  const bigString = hex.fromUint8Array(bigArray)
  console.timeEnd(`hex.fromUint8Array`)

  console.time(`hex.toUint8Array`)
  hex.toUint8Array(bigString)
  console.timeEnd(`hex.toUint8Array`)

  console.time(`hex.fromBuffer`)
  hex.fromBuffer(bigArray.buffer)
  console.timeEnd(`hex.fromBuffer`)

  console.time(`hex.toBuffer`)
  hex.toBuffer(bigString)
  console.timeEnd(`hex.toBuffer`)

  console.log('')
}

run(require('./dist/hex-lite.umd.js'), 'browser')
run(require('./index.js'), 'node')
