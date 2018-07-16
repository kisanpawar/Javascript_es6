let firstName = "kIsan";

function makeUperCase(fname){
return fname.toUpperCase();
}

let template =`<h1>My Name is Kisan ${firstName}</h1>`;


//Dom traversing //
document.querySelector("#printhello").innerHTML = template;