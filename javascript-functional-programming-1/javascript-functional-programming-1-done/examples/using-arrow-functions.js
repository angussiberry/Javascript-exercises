// Cursor Park (anyone not typing put your cursor here)

const people = ["Mark", "Rowan", "Tom at home"]

// With Function keyword
function standardFn(currentItem, currentIndex) {
    // Do something
    console.log(`Hello ${currentItem}, you are index ${currentIndex}`)
}

// Arrow syntax
const callbackFn = (currentItem, currentIndex) => {
    // Do something
    console.log(`Hello ${currentItem}, you are index ${currentIndex}`)
}

// `forEach` is a HOF
people.forEach(standardFn)


const names = ["John", "Mark", "Kyle"]

// Create a new array from the first
// letter of each person's name

const makeUppercaseFn = (name) => name.toUpperCase()

const upper = names.map(makeUppercaseFn)
console.log('Names:', upper)

// EOF
