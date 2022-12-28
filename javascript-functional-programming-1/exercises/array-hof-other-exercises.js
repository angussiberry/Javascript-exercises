// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Reduce the array to only the total age in months of all the doggie Academites
const AgeSum = (runningTot, doggy) => runningTot + doggy.age //counter function to take the running total and add the next age
const startingTotal = 0 //counter has to start somewhere, specified in the .reduce() function   

const totalAge = someAcademitesWithAges.reduce(AgeSum, startingTotal)
console.log(totalAge)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = someAcademitesWithAges.map((obj) => obj.name).sort()
console.log(`${sortByName}`)

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = someAcademitesWithAges.map((obj)=> (obj.age)).sort((a,b) => b-a)
console.log(`${sortByAges}`)


// EOF
