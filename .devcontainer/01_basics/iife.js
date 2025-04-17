// Imediately invoked function expression

// normal function expression
function chai(){
    console.log('db1 connected successfully')
}
chai();
//------------------------------------------------------------------------------------

// iife
(function aurcode(){
    console.log(' connected successfully') // named iife
})();

// we can also use arrow function

(()=>{
    console.log('it is an arrow function');
    
})();

// in iife syntax of passing parameter and arguments is same as a simple function

(function coding(name){
    console.log(` ${name}connected successfully`) // named iife
})('mySQL ');