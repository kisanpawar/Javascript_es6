var output = (function(){

var output;
//  ES5 function declartion and Function expression
// Function Declartion (HostING)

var add = function addData(x,y){
 output = x + y;
console.log(output);
}
add(30,40);
// Function expression   (This function you are assign some variable so without declartion you cant call , it will through error for you)
//subTraction(10,5) IF you call this function you will get Function is not define error;

var subTraction = function(a,b){
    var d = a+b;
    var cal = output + d
    console.log(cal);
}


return {
    subTraction : subTraction,
    
}

 ///This is the right postion to call the function declartion 

})();

output.subTraction(10,20);
//add(10,20);   // it will give the error---