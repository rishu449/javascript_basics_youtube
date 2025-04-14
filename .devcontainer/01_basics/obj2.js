// singelton method or constructor method

const tinder = new Object()
tinder.name="rishabh"
tinder.age=21
//console.log(tinder);


//--------------------------------------------------------------------------

const tinderUser={
    username:{
        fullname:{
            firstName:"Rishabh",
            lastName:"Mishra"
        }
    }
}
//console.log(tinderUser.username.fullname);

//--------------- merging two or more objects into one ------------------------------------

const obj1={
    1:'one',
    2:'two'
}
const obj2={
    3:'three',
    4:'four'
}
const obj3={
    5:'five',
    6:'six'
}
const obj4={...obj1,...obj3,...obj2}
//console.log(obj4);

//-----------------------------------------------------------------------------------------------------

//console.log(Object.keys(obj4));
//console.log(Object.values(obj4));

//------------------------- Object de-structuring ---------------------------------------------------------

const company={
    name:'tcs',
    city:'noida'
}
const {name}=company
console.log(name);
