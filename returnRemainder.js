
function returnRemainder(dividend,divisor){
    const quotient = dividend/divisor
//    console.log(quotient)
    const quotientToFixed = Math.trunc(quotient)
//    console.log(quotientToFixed)
    const remainder = (quotient-quotientToFixed) * divisor
//    console.log(remainder)
    return Number(remainder.toFixed(0))
}

const myDividend = 49
const myDivisor = 7
console.log(returnRemainder(myDividend,myDivisor))