// return remainder when dividing two numbers
function returnRemainder(dividend,divisor){
    const quotient = dividend/divisor
    //    console.log(quotient)
    if (divisor===0) {
        return "Cannot divide by 0."
    } else if (quotient<1){
        return "Input is less than one. No remainder."
    } else {
        const quotientToFixed = Math.trunc(quotient)
        //    console.log(quotientToFixed)
        const remainder = (quotient-quotientToFixed) * divisor
        //    console.log(remainder)
        return Number(remainder.toFixed(0))
    }
}
const myDividend = 43
const myDivisor = 5
console.log(returnRemainder(myDividend,myDivisor))


// ALTERNATE SHORTER VERSION WITH FORMULA FOUND ONLINE - NO OUT FOR FRACTIONS < 1
// a/n = q + r/n
// a/n - q = r/n
// a - nq = r
// remainder = dividend(a) - divisor*quotient
// remainder(r) = dividend(a) - divisor(n)*quotient(q)

/* 
let returnRemainder = (dividend,divisor) => dividend - Math.trunc((divisor*Math.trunc(dividend/divisor)))
const myDividend = 4
const myDivisor = 5
console.log(returnRemainder(myDividend,myDivisor))
*/


// TRYING WITH THROW-CATCH ****RETURNS NaN IF DIVISOR IS 0
/* 
function returnRemainder(dividend,divisor){
    const quotient = dividend/divisor
    if (quotient>0 && quotient<1){
        return "Input is less than one. No remainder."
    } else {
        try {
            const quotientToFixed = Math.trunc(quotient)
            const remainder = (quotient-quotientToFixed) * divisor
            return Number(remainder.toFixed(0))
        } catch(error){
            console.log("Cannot divide by 0.")
        }
    }
}
const myDividend = 43
const myDivisor = 0
console.log(returnRemainder(myDividend,myDivisor))
 */