/*
Sorted Problem Set for Array Methods Practice

This file offers a structured approach to mastering essential array methods in JavaScript. Challenges are categorized by the primary method required (Array.map(), Array.reduce(), Array.filter(), Array.forEach()) for focused learning.

Brief explanations accompany each category, highlighting syntax and typical use cases of each method. You are encouraged to implement solutions using the specified method while considering alternative approaches.

Instructions:

1. Start with the first problem in the `.map()` section.
2. Carefully read the problem statement and understand the required task.
3. Implement the solution using `.map()`, considering its purpose and efficiency.
4. Test your code thoroughly.
5. Move on to the next problem and repeat steps 2-4.
6. Follow this process for each method category, progressively strengthening your skills.

Additional Tips:

- Experiment with different methods for the same problem to deepen your understanding of their nuances.
- Refer to JavaScript documentation or online resources for further method clarifications.
- Use debugging tools or `console.log()` statements to track your code's execution.
- Embrace the challenges and enjoy the journey of mastering these powerful array manipulation tools!
*/

// This line imports the dogs array from data.js. You don't need to do anything with it :)
const dogs = require('./data')

/* Array.map()
Map transforms all elements in an array, creating a new array with altered values. A callback function that is run on each individual array element defines how each value will change. This method is useful for data conversion, formatting, and creating new data structures.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Example adding `5` to each element in an array
const newArr = arr.map(element => element + 5 ); */

// Create an array of all the dog names
console.log(dogs.map((dog) => dog.name))

// Create an array of all the dog names in uppercase
console.log(dogs.map((dog) => dog.name.toUpperCase()))

// Create an array of all the dog names in lowercase
console.log(dogs.map((dog) => dog.name.toLowerCase()))

// Create an array of all the dog names spelled backwards
console.log(dogs.map((dog) => dog.name.split('').reverse().join('')))

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
console.log(dogs.map((dog) => dog.age * 7))


/* Array.reduce()
Reduce accumulates all elements in an array to a single value. A callback function that is run on each individual array element defines how an `accumulator` will change. This method is great for calculations, summarizing data, and finding aggregate values.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Example calculating the sum of items in an array
const sum = arr.reduce((accumulator, element) => accumulator + element, 0 ); 
*/

// How many spots do all the dogs have between them?
console.log(`All the dogs have ${dogs.reduce((spots, dog) => spots + dog.spots, 0)} spots`)

// How much do all the dogs weigh, in total?
console.log(`All the dogs weight ${dogs.reduce((weights, dog) => weights + dog.weight, 0)}`)

// How many inches tall are all of the dogs combined?
console.log(`All the dogs are ${dogs.reduce((inches, dog) => inches + dog.height, 0)} inches tall`)

// What is the total of all the dogs' ages (in human years)?
console.log(`All the dogs are ${dogs.reduce((years, dog) => years + dog.age*7, 0)} years old in total`)

// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
console.log(`$${dogs.reduce((cost, dog) => cost + dog.name.length, 0)} to print tags for every dog`)


/* Array.filter()
Filter builds a new array containing only elements that match a specific condition, specified within a callback function. This array method is ideal for selecting specific data based on criteria. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Example filtering an array to get products with a cost under `100` 
const filteredProductArr = productArr.map(product => product.cost < 100 ); 
*/

// Create an array of dogs who have fewer than ten spots
console.log(dogs.filter((dog) => dog.spots < 10))

// Create an array of dogs who have exactly one spot
console.log(dogs.filter((dog) => dog.spots === 1))

// Create an array of dogs who are three years old or younger
console.log(dogs.filter((dog) => dog.age <= 3))

// Create an array of dogs who are more than 15 inches tall
console.log(dogs.filter((dog) => dog.height > 15))

// Create an array of dogs whose names start with a "P"
console.log(dogs.filter((dog) => dog.name[0].toUpperCase() === "P"))

// Create an array of dogs whose names start with "R" or "S"
console.log(dogs.filter((dog) => dog.name[0].toUpperCase() === "R" || dog.name[0].toUpperCase() === "S"))

// Create an array of dogs who are more than 12 inches tall
console.log(dogs.filter((dog) => dog.height > 12))

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
console.log(dogs.filter((dog) => dog.weight >= 20 && dog.weight <= 30))

// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
console.log(dogs.filter((dog) => dog.height >= 15 && dog.height <= 18))


/* Array.forEach()
Executes a provided callback function on each element in the array. Unlike the previous array methods, it does NOT return a value. It's perfect for iterating through data and performing side effects like logging or DOM manipulation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Example logging the `quantity` of each item in an array.
productArr.map(product => console.log(product.quantity)); 
*/

// Console.log() the name of each dog
dogs.forEach((dog) => console.log(dog.name))

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

// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added
dogs.forEach((dog) => console.log(`${dog.name} is a good ${dog.gender === "M" ? "boy" : "girl"}!`))
