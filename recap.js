function add(price1,price2){

    const total = price1 + price2;
    return total;
}

const bill = add(5,80);

console.log("Rice Bill: ",bill);

function addAll(price1,price2){

    return price1 + price2;
}

const bill_price = addAll(90,5);
console.log("Rice Bill2: ",bill_price);


function doMath(num1,num2){

    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply/2;

    return result;

    
}

const result = doMath(10,5);
console.log(result);


