const name='rohit'
const myobj={
    name:'Rishabh ',
    age:21,
    greet:function (){
        console.log(`${this.name} , welcome back `);
        
    }
}
myobj.greet()
myobj.name="rohit"      //we can change object values
myobj.greet()

//----------------------------------------- Arrow Function ----------------------------------------------------

const one=(a,b)=>{
        return a+b
}
console.log(one(2,3))

//OR

const two=(x,y)=>(2+4)          // if we use parenthesis () instead of curly braces {} we don't need to write return keyword
console.log(two());           
