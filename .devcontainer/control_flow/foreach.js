const myarr=['html','css','js','python']
myarr.forEach(function (item){
   // console.log(`${item} is my fav language`);
    
});

//OR

myarr.forEach((item,index)=>{
   // console.log(item,index);
    
})

//OR

function greet(item){
  //  console.log("hello",item);
    
}
myarr.forEach(greet)

// array of objects

const arr=[
    {
        codinglanguage:"python",
        ext:'py'
    },
    {
        codinglanguage:"c++",
        ext:'cpp'
    },
    {
        codinglanguage:"javascript",
        ext:'js'
    }
]
arr.forEach((item)=>{
    console.log(item.ext);
    
})