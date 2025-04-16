
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