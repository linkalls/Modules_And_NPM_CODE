console.log("argsからhello")
console.log((process.argv))


const args = process.argv.slice(2) // 一個目と2コメ削除

for (let arg of args){
  console.log(`${arg}さんこんにちは`)
}

