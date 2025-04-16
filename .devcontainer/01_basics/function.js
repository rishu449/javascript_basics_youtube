function sum(x,y){
    return x+y
}
 //console.log(sum(2,3))

 function loginMsg(userName){
        return `${userName} just logged in .`
 }
//console.log(loginMsg())         // if we don't pass argument then it will return undefined value






//---------------   PART 2 ----------------------------------------------------------------------------------------




function addCart(...item1){             // here ... is used as rest operator
    return item1
}
//console.log(addCart(4,5,12));           //here rest operator will return agruments in array form => [4,5,12]



// HANDLING OBJECT USING FUNCTION 

const items={
    itemname:"book",
    price:"$ 25"

}
function handleobject(anyobject){
    return ` Item name is ${anyobject.itemname} and its price is ${anyobject.price}`
}
console.log(handleobject(items));       //or

console.log(handleobject({
   
        itemname:'toy',
        price:'$ 2.3'
   
}));



// HANDLING ARRAY USING FUNCTION

const myArray=[100,200,400]
function handleArray(getarray){
    return getarray[1]
}
console.log(handleArray(myArray));  //or

console.log(handleArray([200,500,700]));

