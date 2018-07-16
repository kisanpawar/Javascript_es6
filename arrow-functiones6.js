(function(){


    // ES5 -function declaration
    function getEmployeeDetails(name) {
        return 'Hello ' +name;
    }
    console.log(getEmployeeDetails("kisan"));

    //ES6- We can used string interploation for print variable
    // No need to write function keyword 
    //You can use => operator to write function
    //if you need to pass the parameter also in =(name,pssword) paramter
    //here we are writing explictlty return statement but we dont need the return statement ,

    // What is purpose we need to explictly return keyword in arrow function
    //If you are using {}  you need to write expicitly return statennt
   const displsayName = (name) =>{
        return `hello ${name}`;
   }
   console.log(displsayName("Ramesh"))

//Without return statement we can excute and get the value -- the arrow=> function
//Also we if you dont want write return statment , you can remove the {} bracket after function{}

//Arrow function with parameter
const getUserName = name => `hello ${name}`
console.log(getUserName("forgot return keyword-without return statement : Kisan"));


// NOte : We have one common problem if you create function and we are not add return that variable we are getting the error 'undefine'
//But same function if you write with arrow opertor you will recevie the output

//Example ES5
function printData(){
    'hii  welcome';
}
console.log("This is ES5 Function",printData());

//Example ES6 without parameter
const esprintData = () => 'Hi Awesome'
console.log("This is ES6 function",esprintData());

})();