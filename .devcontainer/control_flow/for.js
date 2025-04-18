for (let i = 0; i < 10; i++) {
   if(i===5){
    console.log('5 is executed')
   }
  
    console.log(i);
    
    
}
for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${j}`)
        if(j===8){
            break;
        }

    }
    console.log(i)
}

//printing table

for (let i = 0; i <=10; i++) {
   for (let j = 0; j <=10; j++) {
    
    if(i==5){
        continue;
    }
    console.log(`${i}*${j}=`,i*j);
    
   }
    
}
//loop over array

const myArr=new Array('html','css','js','mysql')
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
    
}