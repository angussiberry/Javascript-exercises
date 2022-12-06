// InfiniPizza!

// Create a function to use later
const successHandler = (pizzaData) => {
    console.log('I was called back with:', pizzaData)
    //complex processing
    console.log('name:', pizzaData.name)
    console.log('cost: £', pizzaData.cost)
    console.log('size:', pizzaData.size)
}

const fetchData = (pizzaName) => {
    return {
        name: pizzaName,
        cost: 12.34,
        size: '12"'
    }
}

const fetchDbPizzaDetails = (pizzaName) =>
    new Promise((resolve, reject) => {
        //long running action like connect to db, get loads of data
        const databaseData = fetchData(pizzaName) // for example
        resolve(databaseData)
    })

console.log("Start now...")

// Promise to do some code
fetchDbPizzaDetails('Margherita').then(successHandler)

console.log("...Done")
