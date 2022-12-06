// InfiniPizza!

// Create a function to use later
const myLoggerCallback = (data) => console.log('I was called back with:', data)
const myErrorCallback = (data) => console.error('There was an Error:', data)

const promiseMaker = (declaration) =>
    new Promise((resolve, reject) => {
        //long running action like connect to db, get loads of data
        const databaseSuccess = false

        if (databaseSuccess) {
            //then on success
            resolve(`I promised to: ${declaration} and I have`)
        } else {
            // or on error, reject it
            reject(`I have failed to do my job of '${declaration}' and am a terrible person`)
        }
    })

const promise1 = promiseMaker("Do the washing up")

console.log("Start now...")

// Promise to do some code
// Then [if there was no error] log the success
// Catch any reject  
promise1.then(myLoggerCallback).catch(myErrorCallback)

// The "catch" is only called if there was a Reject in a previous stage
// The last log is always invoked, like a "finally" block, so logs "Undefined" if there was a Reject from the initial promise
//promise1.catch(myErrorCallback).then(myLoggerCallback)

console.log("...Done")
