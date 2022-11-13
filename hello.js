// const a = 10;
// const b = 11;

// console.log("hello bbs "+a+b);

// if(a>5)
//     console.log(a+" is greater than 5");
// else if(b>5)
//     console.log(b+" is greater than 5");
    
// const c = [a,2,3,"string","01",true];

// const n =6;
// for(let i=0;i<n;i++)
//     console.log(c[i]);
    
// const data = {
//     key : "value",
//     key1 : 2,
// }
// console.log(data["key1"]);

// const x = {
//     b:undefined,
//     c:null,
//     z : {
//         b:1,
//         d:2,
//     }
// }
// try{
//     console.log(x.b+x.c);
// }catch(err){
//     consol.log(err);
// }
// try{
//     console.log(x.b+x.c);
// }catch(err){
//     consol.log(err);
// }

// function square(x)
// {
//     return x*x;
// }
// function print(x)
// {
//     console.log(x);
// }
// print("Square of 11 is "+ square(11));

// First in the terminal type npm init then 
// To install any library , first type npm i (nameOfTheFile) 
// then install it then use it as shown below
 
const cowsay = require("cowsay");   //This should be at top 
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);
console.log(
    cowsay.say({
        text:getRandomJoke.body,
        e:'uu',
        T:'U',
    })
)