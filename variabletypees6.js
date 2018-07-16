// Author Kisan : Run function inside the IIFI Funcation ()
(function(){
    var firstName = "Kisan";
    let lastName = "Pawar";
    const age = 28;  

    const pi = 3.14;  /*  */
    const monthcalnder =["jan","feb"]

    //Statement 1: Global Scope
    console.log(`Global Variable....My name is ${firstName}${lastName} , I am ${age} years old`);
    

    /* ES6 has block scope...they work as block */
    {
        var firstName = "Krisha";
        let lastName = "Patil";
        const Age = 3; 
        //Statement 2: Local  Scope        
      //  console.log(`block scope variable....My name is ${firstName}${lastName} , I am ${age} years old`);
    }

    for (let k = 0; k < 10; k++) {
        console.log(k);
    }
    //console.log(k);
    //1 to 9 10

    let myName ='vilas';
    let myName ='kisan';

    

    for (let k = 0; k < 10; k++) {
        console.log(k);
    }
    console.log(k);




    function getdisplay(){
        var firstName = "Krisha";
        let lastName = "Patil";
        const Age = 3; 
        //Statement 2: Local  Scope        
        console.log(`block scope variable....My name is ${firstName}${lastName} , I am ${age} years old`);
    }
    //Statement 3: Global   Scope       
    console.log(`Global Variable....My name is ${firstName}${lastName} , I am ${age} years old`);

    



})();