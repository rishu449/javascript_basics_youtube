
 if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);            // cannot use variable from local scope ==>let
 //console.log(b);            //cannot use variable from local scope ==>const
 console.log(c);            //can use variable from local scope ==>var
 


 //---------------------------------------------------------------------------------------------------

 let a=100  //global variable
 if(true){
    let a=10 // local variable
    console.log('inner',a);
    
}
console.log(a);


// NOTE => global variables can be access by both block scope  and global scope
// but local variables can be only access inside their block scope

//NOTE=> not recommended to use var while declaring variable because it can be access outside of the block  scope


//=================================== PART 2 ===============================================================


function one(){
    const name='Rishabh'
    function two(){
        const city='sitapur'
        console.log(name);      // Execute:name is a global variable and can be access inside block scope
        
    }
    two()
    console.log(city);         // Error:city is a local variable so it can be only used in its block 
    
}
one()

//---------------------------------------------------------------------------------------------
 // SAME AS FUNCTION 
if(true){
    const username='rishu'
    if(true){
        const age=21
        console.log(username,age);
        
    }
    console.log(age);
}



//------------------------------------  INTRESTING ----------------------------------------------------------


function myfun(n){
    return n+1
}
myfun(4)

// OR 
myfun(4)
function myfun(n){
    return n+1
}
// here we can call the function  bafore or after its declaration
// here both of the hoisting techniques are correct

const myvar=function myfun2(m){
    return m-1
}
myfun2(3)

// here we can call the function after its declaration
