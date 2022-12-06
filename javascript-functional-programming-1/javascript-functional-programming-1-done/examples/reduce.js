// Cursor Park (anyone not typing put your cursor here)

const balances = [1, 10, 50]
const totaliser = (total, balance) => total + balance
const startingBalance = 0

const sum = balances.reduce(totaliser, startingBalance)

console.log(sum)

// EOF
