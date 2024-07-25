const { PI, square, add } = require("./math") //* 自分のファイルの時は相対パスで
//* 必要なものだけ読み込みもできる
const cats = require("./shelter") //* index.jsがデフォで読まれる

console.log("ディレクトリをrequire:", cats)
console.log(PI)

console.log(square(9))

console.log(add(1, 2))
