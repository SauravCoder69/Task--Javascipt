
//15.1

let num1 = 100;
if(num1%3==0){
    console.log("given number divide then this number multiple of 3")
}
else{
    console.log("not divide then not multiple of 3")
}



//task 15 .2 


let str1 = " I am learning js";
console.log(str1.includes('js'),'exist string')




//task 15 .3 



let p = Number(prompt("Enter principal"));
let r = Number(prompt("Enter rate"));
let t = Number(prompt("Enter time"));

let answer = ((p/r)*t)/100;
console.log(answer,'final answer')