const franc = require("franc")
const langs = require("langs")
const colors = require("colors")


const userInput = process.argv[2]
if(!userInput){
  console.log("解析できませんでした。違う文章でもう一度試してください".red)
} else {
// console.log(userInput)
const langCode = franc(userInput)
if(!langCode ==="und"){
const langObject = langs.where("3", langCode); //* ISO 639-3 
console.log(`[${langObject.name}]でしょうか？`.green) //* ここで言語かえってくる
// console.log(langObject)
} else {
  console.log("解析できませんでした。違う文章でもう一度試してください".rainbow)
} 
}

//  {
//   '1': 'ja',
//   '2': 'jpn',
//   '3': 'jpn',
//   name: 'Japanese',
//   local: '日本語',
//   '2T': 'jpn',
//   '2B': 'jpn'
// }


