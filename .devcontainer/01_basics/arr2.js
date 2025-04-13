const arr1=[1,2,3,4]
const arr2=["a",'b','c','d']
const arr3=[true,false]
const arr=arr1.concat(arr2)
console.log(arr);
const arrTotal=[...arr1,...arr2,...arr3] //here we use spread operator
console.log(arrTotal);

const myArr=[1,2,[3,4],5,6,[7,[8,9]]]
console.log(myArr.flat(Infinity));      //converts into simple array

const name='rishabh'
console.log(Array.from(name));          //converts string into array
const a="a"
const b="b"
const c="c"
console.log(Array.of(a,b,c));              //converts multiple values into array element
