const mySym=Symbol('key1')
const JsUser={                  //object literal method
    name:'Rishabh',
    age:21,
    address:'sitapur',
    email:'abc@gmail.com',
    [mySym]:'key1'              //we will write symbol key inside []
   }
//console.log( typeof JsUser[mySym]);
//console.log(JsUser.age=22);

//Object.freeze(JsUser)           //it will freeze th values inside the object

JsUser.greet=function(){
    console.log(`Hello ${this.name} , your age is ${this.age} ,you are from ${this.address}`);
    
}
console.log(JsUser.greet());
