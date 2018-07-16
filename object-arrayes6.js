(function () {

    //ES5- object assign and merge the object 
    var ITEmployeeDetails = {
        FirstName: 'Kisan',
        lastname: 'Pawar',
        age: '30'
    }
    var HrEmployeeDetails = {
        FirstName: 'Raj',
        lastname: 'Patil',
        age: 20,
        hobbies: ['cricket,Hockey,FootBall']
    }
    // if you need to merge one object to new object  use this function (but if you get the same object name it will override so please check the object , when you assign the obejct)
    var companyEmployee = Object.assign(ITEmployeeDetails, HrEmployeeDetails)
    console.log(JSON.stringify(companyEmployee));

    //ES6 example with ... Spread opertor --Easy to used
    // Directly assign to new object

    const employeeDetails = {
        fname: 'kisan',
        lastname: 'Pawar',
        age:28
    }
    const updateEmployeeDetails = {
        fname: 'RAJ',
        hobbies: ['cricket', 'hockey', 'football'],
        salary: 100000
    }

    const DisplaySpreadopertor  = {...employeeDetails,...updateEmployeeDetails}
    //const DisplaySpreadopertor  = {...employeeDetails,...updateEmployeeDetails}
    console.log(DisplaySpreadopertor);
    console.log(DisplaySpreadopertor.age);


 // Example 2: ES5 Object destructuring now :(remove the data one object and assign to variable)
  
    var empObj ={
        emp1:'kisan',
        salary:'5000'
    }
    var empName = empObj.emp1;
    var empSalary = empObj.salary;

  // Example 2: ES5 Object destructuring now :(remove the data one object and assign to variable)
 
    const es6empObj = {
        emp1: 'kisan',
        salary: '5000'
    }
    const {
        fname,
        lastname
    } = es6empObj

    console.log(es6empObj)
    
//es6 object declartion
var a =1;
var b =2;
var c =3;
var d = 4; 
var obj1 = {
    a:a,
    b:b,
    c:c,
    d:d
}
// its WOW... NO need to assign  Directly assign to the object...
var es6Obj ={a,b,c,d}
console.log(es6Obj);











})();