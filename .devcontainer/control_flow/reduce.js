const arr=[100,140,168,250]

 const newarr=arr.reduce((acc,curr)=>{ return acc+curr},0)
//console.log(`you have to pay ${newarr}`);

const courses=[
    {name:'python course',
    price:1499
    },
    {name:'mern stack course',
    price:2999
    },
    {name:'data analytics course',
    price:3550
    },
    {name:'data science course',
    price:1499
    },
]
const sum=courses.reduce((acc,item)=>item.price+acc,0)
console.log(sum);
