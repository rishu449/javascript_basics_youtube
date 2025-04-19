const myArr=[1,2,3,4]
for(const n of myArr){
    //console.log(`element of array are - ${n}`)
}

// for-of loop on string

const name='rishabh mishra'
for(const val of name){

  //  console.log(`each alphabet is ${val}`)
}
// for-of loop on map
const map=new Map()
map.set(1,'rishabh')
map.set(2,'rohit')
map.set(3,'vikash')
map.set(4,'amit')
for (const [key,val] of map) {
   // console.log(key+'=>'+val)
    
}
// for-of loop on object

const myobj={
    1:'apple',
    2:'banana',
    3:'grapes'
}
for (const val of myobj) {
    console.log(val);
    
}       //type error : myobj is not iterable

//Note : for-of loop is not applicable for object 

