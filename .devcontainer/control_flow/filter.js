const arr=[1,2,3,4,5,6]
arr.filter((item)=>{
   // console.log(item)
})
arr.forEach( function (item){
    //console.log(item)
})

const myarr=[2,4,6,8,10]
//console.log(myarr.filter((item)=>{item>5}))

const city=[
    {name:'agra',state:'up',language:'hindi',rank:10},
    {name:'banglore',state:'karnataka',language:'kannad',rank:1},
    {name:'noida',state:'up',language:'hindi',rank:4},
    {name:'lucknow',state:'up',language:'hindi',rank:18},
    {name:'ahemdabad',state:'gujrat',language:'gujrati',rank:2}
]
 //const result=city.filter((item)=>(item.name==='agra'))
 const res=city.forEach((i)=>{return i.name==='agra'
 })
 console.log(res);
 
 //console.log(result);

 //const arry=[1,2,3,4]
 //arry.map((itm)=>(console.log(itm)
 //)
 //)
 const obj= {name:'noida',state:'up',language:'hindi',rank:4}
 //obj.forEach((item)=>{console.log(item)}
//)

 