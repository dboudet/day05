const hotDogStack = ['dog','dog','dog','dog','dog','dog','dog']

//build a function that uses a callback

function getHotDog(callback) {     // instead of callback - can use next or nextStep or cb ...
    if(!hotDogStack.length) {         // exclamation point for not. good to start with the exception.
        throw 'No more hotdogs!'
    }
    const hotdog = hotDogStack.pop()
    // return hotdog
    callback(hotdog)
}

// call a function with a callback

function eatSomething(food){
    console.log('I ate the',food)
}

try {
    getHotDog(eatSomething)
}
catch(error){
    console.error(error)
}