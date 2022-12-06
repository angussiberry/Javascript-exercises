// InfiniPizza!

// async/await example

// This defines a promise like we saw before
const waitOne = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000)
    })

// The "async" keyword wraps the following code in a Promise:
const waitThreeAsync = async () => {
    const a = await waitOne() // The await keyword blocks until the promise resolves
    const b = await waitOne()
    const c = await waitOne()
    return a + b + c
}
//...waitThreeAsync as a function is asynchronous - but has synchronous calls within it

// (A) To invoke any Promise code we need to either be in an "async" block
const begin = async () => {
    console.log(await waitThreeAsync())
}

console.log("Start now...")
begin() // 3
console.log("...done")

// (B) Or we need to use the promise chain
// So this still works
console.log("Start now...")
waitThreeAsync().then(console.log) // 3
console.log("...done")
