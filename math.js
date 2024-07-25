const add = (x, y) => x + y

const PI = 3.14159

const square = (x) => x * x

exports.add = add //* 明示的に書くようにする
exports.PI = PI
exports.square = square

// -----------------
// const math = {
//   add: add,
//   PI: PI,
//   square: square,
// }
// module.exports = math

 // -----------------
// module.exports.add = add //* moduleは省略できる 
// module.exports.PI = PI
// module.exports.square = square
