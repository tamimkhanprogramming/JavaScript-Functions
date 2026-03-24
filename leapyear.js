/**
 * year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year){

    if(year % 4 === 0){

        return true;
    }
    else{

        return false;
    }
}

const isYearLeap = isLeapYear(2052);

console.log("Leap Year 2052 is: ",isYearLeap);

/**
 * 1.Those Year that is not divisible by 100 and Divisible by 4 is Leap Year
 * 2.Those year that is divisble by 100 and Also Divisble by 400 is a leap year.
 */
function isLeapYear1(year){

    if(year % 100 !==0 && year % 4 === 0){
           return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{

        return false;
    }
}

const isYearLeap1 = isLeapYear1(2052);

console.log("Leap Year 2052 is: ",isYearLeap1);