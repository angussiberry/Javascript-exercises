// Cursor Park (anyone not typing put your cursor here)

const ledger = [5.0, -2.3, 10.0, -12, 20.0]

// Pure functions
const removeDebits = (price) => price > 0 // keep items where this is true
const convertToEUR = (price) => price * 0.9
const formatToString = (price) => `€${price}`

// Compose
const takings = ledger
  .filter(removeDebits)
  .map(convertToEUR)
  .map(formatToString) // E.g ["€4.5", "€9", "€18"]

console.log(`Takings: ${takings.join(', ')}`)
