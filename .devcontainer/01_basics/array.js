// ++++++++++++++++++++++++++++++ Declaration of array +++++++++++++++++++++++++++++++++++++++++++

let myarray=[1,2,3,"one",'two',true]

//-------------------------- or -------------------------------------------------------

let myArr=new Array(1,2,3,4)

//------------------------- array operations --------------------------------------------
myArr.push(1)   //insert element in the last
//console.log(myArr);

myArr.pop()     //removes element from last
//console.log(myArr);

myArr.unshift("Rishabh") // insert element at the start
//console.log(myArr)

myArr.shift()
//console.log(myArr)                //remove the element from the starting

//console.log(myArr.includes(2) )     //checks the element present or not 

const newArr=myArr.join()           // converts array elements into string
//console.log(newArr)

//-------------------------------------- Slice /splice methods ---------------------------------------

const newn1=myArr.slice(0,3)
console.log(newn1);

const newn2=myArr.splice(0,2)
console.log("A",myArr);

console.log(newn2);