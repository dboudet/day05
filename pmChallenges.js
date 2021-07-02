//is sum of two numbers equal to ten
// USING TERNARY FOR IF/ELSE
/* 
function isSumTen(a,b) {
    let result = a+b===10 ? true : false
    return result
}

const num1 = 3
const num2 = 4

console.log(isSumTen(num1,num2))
 */

//fraction greater than one
function isGreaterThanOne(num1,num2){
    console.log(num1/num2 > 1 ? `${num1}/${num2} is greater than one` : `${num1}/${num2} is less than one`)
}

const numerator = 2
const denominator = 3

isGreaterThanOne(numerator,denominator)