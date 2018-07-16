(function(){

    const employee = {
        empName:"kisan",
        empLastName:"pawar"

    };

    const employeeSalary={
        salary:"3000"
    }


    //Object Method for Opertions...

//Object.assign(): This method is merge data one object to another object ...If one object has empName and secound object same object then it will overide the object

const returnEmployeeObj = Object.assign(employee,employeeSalary);
console.log("This out put for ...object.assign()" ,returnEmployeeObj);

//Suppose you have person object and you forget to add properties on that object so how you can create object and pass runtime
//The Object.create() method creates a new object, using an existing object to provide 
const person = {
    isMarrid:false,
    getPersonDetails:function(){
        if(this.isMarrid){
            console.log(`His Name is ${this.pname} and he is married`);
        }
        
    }

}

const newPerson = Object.create(person);
newPerson.pname="kisan";
// newPerson.surName="Pawar";
newPerson.isMarrid=true;
newPerson.getPersonDetails();














})();