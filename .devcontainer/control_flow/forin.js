const myObj={
    js:'javascript',
    py:'python',
    cpp:'c++',
    html:'hypertext markuup language'
}
for (const key in myObj) {
    console.log(`${key} is a shortcut of ${myObj[key]}`);
    
}
const myarr=['a','b','c','d']
for (const key in myarr) {
    console.log(myarr[key]);
    
}