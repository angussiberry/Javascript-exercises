// Cursor Park (anyone not typing put your cursor here)

const mixedNumeric = ["12", 3, "233", 23, "1"]
mixedNumeric.sort() // Not useful
console.log('mixedNumeric not useful', mixedNumeric)

const compareNumbersA = (a, b) => a - b // ASC
const compareNumbersD = (a, b) => b - a // DESC

mixedNumeric.sort(compareNumbersA) // ASC
console.log('mixedNumeric sorted ASC', mixedNumeric)

mixedNumeric.sort(compareNumbersD) // DESC
console.log('mixedNumeric sorted DESC', mixedNumeric)

// EOF
