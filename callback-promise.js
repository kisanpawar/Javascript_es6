(function(){

    // Function Callback 
    function isGreaterCheck(a,b,cb){
        var isgreater = false;
        if(a>b){
            isgreater = true;
        }
        cb(isgreater)
    }
  
    isGreaterCheck(30, 20, function (result) {
        if (result) {
            console.log('greater');
        } else {
            console.log('smaller')
        }
    });
console.log("please wait for function excute");

// Promise es6 Approche......

    const isGetData = (a, b) => {
        return new Promise((resolve, reject) => {
            if (a > b) {
                resolve(true)
            } else {
                reject(false)
            }
        })

    }
    isGetData(5, 2)
    .then(result => {
        console.log('greater')
    })
    .catch(result => {
        console.log('smaller')
    })









})();