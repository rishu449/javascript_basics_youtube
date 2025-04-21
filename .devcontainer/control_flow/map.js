// CHAINING IN MAP FUNCTION
const myArr=[1,2,3,4,5,6,7,8]
const newArr=myArr.map((item)=>(item*10)).map((item)=>(item+1)).filter((item)=>(item>4))
//console.log(newArr);

const res=myArr.filter((item)=>{ return item>5})
console.log(res);


//------------------------------ REDUCE FUNCTION IN JAVASCRIPT ----------------------------------------------------------


