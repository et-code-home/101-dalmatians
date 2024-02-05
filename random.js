/*
Random Problem Set for Array Methods Practice

This file presents a collection of JavaScript coding challenges specifically designed to reinforce proficiency in using the following array methods:

- Array.map()
- Array.reduce()
- Array.filter()
- Array.forEach()

The problems cover a range of common array manipulation tasks, providing comprehensive practice. The problems are identical to those in 'sorted.js', but they are presented in a random order, encouraging adaptability and problem-solving skills.

Instructions:

1. Carefully read each problem statement.
2. Implement the required solution using the most appropriate array method(s).
3. Test your solutions thoroughly for correctness and efficiency.

Additional Tips:

- Refer to JavaScript documentation or online resources if needed for further clarification on array methods.
- Consider using debugging tools to step through your code or `console.log()` statements to identify any issues.
- Embrace the challenge and enjoy the process of learning and mastering these essential JavaScript tools!
*/

// This line imports the dogs array from `data.js`. You don't need to do anything with it :)
const dogs = require('./data')

// Console.log() the name of each dog
dogs.forEach((dog) => console.log(dog.name))

// Create an array of all the dog names
console.log(dogs.map((dog) => dog.name))

// Create an array of dogs who are more than 15 inches tall
console.log(dogs.filter((dog) => dog.height > 15))

// Create an array of dogs whose names start with "R" or "S"
console.log(dogs.filter((dog) => dog.name[0].toUpperCase() === "R" || dog.name[0].toUpperCase() === "S"))

// How many spots do all the dogs have between them?
console.log(`All the dogs have ${dogs.reduce((spots, dog) => spots + dog.spots, 0)} spots`)

// Create an array of dogs who are more than 12 inches tall
console.log(dogs.filter((dog) => dog.height > 12))

// Create an array of all the dog names in lowercase
console.log(dogs.map((dog) => dog.name.toLowerCase()))

// How much do all the dogs weigh, in total?
console.log(`All the dogs weight ${dogs.reduce((weights, dog) => weights + dog.weight, 0)}`)

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
console.log(dogs.map((dog) => dog.age * 7))

// How many inches tall are all of the dogs combined?
console.log(`All the dogs are ${dogs.reduce((inches, dog) => inches + dog.height, 0)} inches tall`)

// Create an array of dogs who are three years old or younger
console.log(dogs.filter((dog) => dog.age <= 3))

// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
console.log(dogs.filter((dog) => dog.height >= 15 && dog.height <= 18))

// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
console.log(`$${dogs.reduce((cost, dog) => cost + dog.name.length, 0)} to print tags for every dog`)

// Create an array of dogs who have fewer than ten spots
console.log(dogs.filter((dog) => dog.spots < 10))

// What is the total of all the dogs' ages (in human years)?
console.log(`All the dogs are ${dogs.reduce((years, dog) => years + dog.age*7, 0)} years old in total`)

// Create an array of dogs who have exactly one spot
console.log(dogs.filter((dog) => dog.spots === 1))

// Create an array of all the dog names spelled backwards
console.log(dogs.map((dog) => dog.name.split('').reverse().join('')))

// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
dogs.forEach((dog) => {
  const rand = Math.random()
  if(rand < 0.5) {
    dog.gender = "M"
  }
  else {
    dog.gender = "F"
  }
})
console.log(dogs)

// Create an array of all the dog names in uppercase
console.log(dogs.map((dog) => dog.name.toUpperCase()))

// Create an array of dogs whose names start with a "P"
console.log(dogs.filter((dog) => dog.name[0].toUpperCase() === "P"))

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
console.log(dogs.filter((dog) => dog.weight >= 20 && dog.weight <= 30))

// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added earlier
dogs.forEach((dog) => console.log(`${dog.name} is a good ${dog.gender === "M" ? "boy" : "girl"}!`))
