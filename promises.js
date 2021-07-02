
function getBeef() {
    return new Promise((resolve,reject) => {
        if (beefStack.length) {
            resolve(beefStack.pop())
        } else{
            reject('No beef left!')
        }
    })
}




//make burger


function makeBurger() {
    return getBeef()
    .then(cookBeef) // shorter way of saying .then(beef => cookBeef(beef))
    .then(getBuns)  // again, same thing as .then(patty => getBuns(patty))
    .then(putBeefBetweenBuns)
}
makeBurger().then(serve)



// pizza
/* 
chooseToppings()
    .then(function(toppings){         // OR .then(toppings) => {
        return placeOrder(toppings)
    })
    .then(function(order) {
        return pickupOrder(order)
    })
    ...
 */
// CAN BE WRITTEN AS:

chooseToppings()
    .then(placeOrder)
    .then(pickupOrder)
    .then(eat)
    .catch(failureCallback)


// OR .......
chooseToppings()
    .then(toppings => placeOrder(toppings))
    .then(order => pickupOrder(order))
    .then(pizza => eat(pizza))
    .catch(err => failureCallback(err))
    
    // OR EVEN .......
chooseToppings().then(placeOrder).then(pickupOrder).then(eat).catch(failureCallback)
