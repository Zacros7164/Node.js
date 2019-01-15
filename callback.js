// a callback is a function for some other function to run
// a function to be called after by another function

// in JS, functions are first-class objects
// that means... you can do almost anything with a function
// that you can do with any object
// -pass them around
// -assign it to a variable
// -overwrite it
// function x(){}
// console.log(typeof(x))

// const myFunction = function(n){
//     console.log(n);
// }

// // console.log(myFunction)

// function myOtherFunction(callback){
//     callback(5)
// }

// myOtherFunction(myFunction)



// =================================
//          Callback exercises
// =================================

// const myFunction = function(x){
//     console.log(x+15);
// }

// const myOtherFunction = function(callback){
//     // console.log(typeof(callback))
//     if(typeof(callback) == 'function'){
//         callback(5);
//     }else if(typeof(callback) == 'number'){
//         console.log("the number is " + callback);
//     }else if(Array.isArray(callback)){
//         console.log(callback[0]);
//     }else if(typeof(callback) == 'object'){
//         console.log(callback);
//     }else{
//         console.log(callback)
//     }

// }

// const atlSports = {
//     baseball: 'Braves',
//     football: 'Falcons',
//     soccer: 'United',
//     basketball: 'Hawks',
//     hockey: 'N/A',
// }

// const atlTeams = [
//     'Braves',
//     'Hawks',
//     'Falcons',
//     'United',
// ]

// myOtherFunction('hello')

// =================================

const findElem = function(array, callback){
    return callback(array)
}


const myFunction = (array)=>{
    let answer = 0;
    let myArray = array.filter((number)=>{
        console.log(number)
        if(number%2 == 0){
            return number
        }
        // console.log(number)
    })
    return myArray
    // return number
}

let answer = findElem([1,3,5,8,9,10], myFunction);
console.log(answer)