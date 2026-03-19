function stringcheck(str){

    const check_str = str;
    const size = str.length;
    console.log(str,size);

    if(size % 2 === 0){

        console.log("Even Size");
    }

    else{

        console.log("Odd Size");
    }
    
}

stringcheck('Hello');
stringcheck('Bye');


 function doubleOrTripleCheck(number,double){

    if(double === true){

        const num = number * 2;
        return num;
    }

    else{

        const num = number * 3;
        return num;
    }
 }

console.log(doubleOrTripleCheck(5,true));
console.log(doubleOrTripleCheck(5,false));

function getAge(person){

    const age = person.age;
    return age;
}

function ArrayofElements(number){

    const number_Size = number.length;
    return number_Size;
}

ArrayofElements([1,2,3,4,5,6,7,8,9,10,11,12]);