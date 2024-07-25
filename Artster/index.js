const figlet = require("figlet")
const colors = require("colors")

figlet("Hello Man!", (err, data) => {
  if (err) {
    console.log("Something went wrong...")
    console.dir(err.red)
    return
  }
  console.log(data.green)
  console.log(err)
})
