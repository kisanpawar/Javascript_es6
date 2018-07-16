class User{
    constructor(fname,lastname,age){
        this.firstName = fname;
        this.lastname = lastname;
        this.age=age;
    }

    printUserDetails(){
        console.log(`MY name is ${this.firstName}......`);
    }

    static message(){
        console.log("Enter Valid Message");
    } 

}

//let emp1 = new User("Kisan","pawar",20);
//emp1.printUserDetails();

class empDetails extends User{
   // constructor automaticly excute after creating the oject
    constructor(firstName,lastname,age,salary){
        super(firstName,lastname,age); //intilize the elment from parent class ///
     //insted of declare this.firstName-- you can use same super method and intilize the member
     //No Need to write extra code....
        this.salary = salary;
    }

    printEmpDetails(){
        console.log(`Employee Salary is  ${this.salary}`);
    }

}

//let empData = new empDetails("KIsan","Pawar",20,3333333);
//empData.printEmpDetails();
//empData.printUserDetails();


// Pass data as object and work the function
class UserData {

    constructor(userData){
        //Safe check the Data        
        // var opts = arguments[0] === undefined ? {} : arguments[0];
        // var name = opts.name === undefined ? 'Default user' : opts.name;
        // var age = opts.age === undefined ? 'N/A' : opts.age;

        this.fname = userData.fname;
        this.lname = userData.lname;
        
    }

    printUseData(){
     console.log(`The Data is below here....${this.fname}`);
    }

}
let data ={
    fname:"vilas",
    lname:"Raj"
}

let arraydata = [{empID:1001,fname:"kisan",lname:"pawar"},{empID:1001,fname:"raj",lname:"pawar"},{empID:1003,fname:"kp",lname:"pawar"}]

let user_Data = new UserData(data);
user_Data.printUseData();




