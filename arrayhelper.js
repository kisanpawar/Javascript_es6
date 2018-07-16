(function() {

    const color = ["RED","BLUE","GREEN","White"];
    // declare private variables and/or functions
    function printValue(colourName){
        if(colourName == "RED") {
            console.log("You have selected the Color RED ",colourName);
            return
        }
        
       
    }

color.forEach(printValue);  //Executes the provided function for each element of the array, passing the array element as an argument.
// Supoose you have bunch of the color and you need to do some opertion using that color you can used this method

const opertion = ["+","-","*"];
var resultadd;
var resultmulti;
var resultsub;
var returnObj = {};

function printOpertion(val){
    if (val == "+") {
        returnObj.resultadd = 10 + 20;
    } else if (val == "*") {
        returnObj.resultmulti = 10 * 20;
    } else if (val == "-") {
        returnObj.resultmulti = 100 - 20;
    }
    console.log(returnObj);
}


opertion.forEach(printOpertion);


var array = [1, 2, 3, 4];
const sum = (acc, value) => {
  const result = acc + value
  console.log(acc, ' plus ', value, ' is ', result)
  return result
}

var sumOfArrayElements = array.reduce(sum, 0)
console.log(sumOfArrayElements);





    
    // return {
    //   // declare public variables and/or functions
    // }

})();