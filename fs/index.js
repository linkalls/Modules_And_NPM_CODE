// fileSystemの略
const fs = require("fs")
const dirName = process.argv[2] || "Project" //ユーザーが指定した引数なかったらProject

// fs.mkdir('Dogs', { recursive: true }, (err) => {
// console.log("コールバック内")
//   if (err) throw err;
// });

fs.mkdirSync(dirName)
try{
  fs.writeFileSync(`${dirName}/index.html`,"")
  fs.writeFileSync(`${dirName}/app.js`,"")
  fs.writeFileSync(`${dirName}/styles.css`,"")
} catch(e) {
console.log("エラーが出たよ",e)
}



const url = "https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback"
