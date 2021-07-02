// RETURN ABSOLUTE VALUE OF A NUMBER

//NORMAL IF/ELSE
/* 
function findAbsoluteValue(num){
    if(num<0){
        let result = num*-1
        return result
    } else {
        let result = num
        return result
    }
}
const testNum = 0
console.log(findAbsoluteValue(testNum))
 */

// TERNARY
function findAbsoluteValue(num){
    return num<0 ? num*-1 : num
}
const testNum = -3
console.log(findAbsoluteValue(testNum))



// TESTING ARROW NOTATION - IN PROGRESS - NOT FUNCTIONAL
/* 
const findAbsVal = (num)=> console.log((num)<0 ? (num)*-1 : (num))
findAbsVal(num)
*/