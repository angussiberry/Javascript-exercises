// InfiniPizza!

const waitOne = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(1), 500)
    })

const waitTwo = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(2), 1000)
    })

const boomBox = () =>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            console.error(`Database goes boom`)
            reject('Boom')
            // An error here blows the whole stack even if there is a promise.catch()
            // throw new Error('Database goes boom') 
        }, 750)
    })

// An array of Promises
const tasks = [waitOne(), waitTwo(), waitOne(), boomBox()]

const successReport = (someData) => {
    console.log('Success all finished!', JSON.stringify(someData))
}

const errorHandler = (someError) => {
    console.error('There was an error, please try again later...', someError)
}

console.log("Start now...")
Promise.all(tasks)
    .then(successReport) // [1,2,1, Boom] an array of all the Settled values
    .catch(errorHandler) // Not invoked even if there is an Error
console.log("...Done")
