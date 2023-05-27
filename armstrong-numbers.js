// problem URL: https://exercism.org/tracks/javascript/exercises/armstrong-numbers

// INSTRUCTIONS:
// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

// For example:

// 9 is an Armstrong number, because 9 = 9^1 = 9
// 10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
// 153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

const isArmstrongNumber = (number) => {
    let strNumber = number.toString();
    const leng = strNumber.length;
    let res =0;
    if (leng ===1){
        return true
    }else{
        for (let i=0; i<leng; i++){
            res+=parseInt(strNumber[i])**leng;
        }
    }
    return res===number;
};

console.log(isArmstrongNumber(9926315)) // true
console.log(isArmstrongNumber(9475)) // false