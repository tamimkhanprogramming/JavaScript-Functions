const biryanikhor = ['abul','babul','cabul','abul','babul','dabul'];


function noDuplicate(array){

  const unique = [];

  for(const item of array){

    if(unique.includes(item)===false){

      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biryanikhor);

console.log(uniqueArray);