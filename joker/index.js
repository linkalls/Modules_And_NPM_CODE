const jokes = require("give-me-a-joke")
const color = require("colors")
const cowsay = require("cowsay");

// console.log(jokes)

jokes.getRandomDadJoke((joke) => {
  console.log(joke.green)
})

console.log("hello Red".rainbow)



console.log(cowsay.say({
    text : "I'm a cow",
    e : "oO",
    T : "U "
}));






// async function fetchAndLogJoke() {
//   try {
//     const joke = await jokes.getRandomDadJoke((joke) => joke)
//     console.log(joke.green)
//   } catch (error) {
//     console.error("Failed to fetch joke:", error)
//   }
// }

// fetchAndLogJoke()




