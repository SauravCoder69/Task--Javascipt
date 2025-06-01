//1
let str1 = "gfuhieiuei";
console.log(str1.slice(0, 5), "slice used here");

//2
let str2 = "hduejdij";
console.log(str2.length, "length of string");
console.log(str2.toUpperCase(),'change uppercase')


//3
let str3 = ' Saurav  Jha'

console.log(str3.toLowerCase(),'change lowercase')
let trimmed = str3.trim();
console.log(trimmed,'trim')
console.log(trimmed.length,'after trim')
console.log(str3.length,'before trim')



//4
let str4 = 'I love tea'
console.log(str4.replace("tea","coffee"))



//5
console.log(89+'hello'+ 90/9)






               //Task 13//

               let car = {
                 name: "XUV",
                 brand: "Hunda"
                  };
                  console.log(car.name)

                   let aniaml = {
                 name: "Dog",
                 sound:"bark"
                
                  };
                   console.log(aniaml.sound)


                   //2 find the duplicate in a string() (use array)-optional

     let str = "programming";
let count = new Array(26).fill(0);
let duplicates = "";

for (let i = 0; i < str.length; i++) {
  let index = str[i].charCodeAt(0) - 97;
  count[index]++;
  if (count[index] === 2) {
    duplicates += str[i];
  }
}

console.log(duplicates);


//3 reverse a array string(use array method)

let str5 = "saurav"
let reversed = str5.split("").reverse().join("");
console.log(reversed);





//4
console.log (Math.max(10,20,30,40));
console.log (Math.min(10,20,30,40));



//5 sorting of an array

let arr = [10,50,30,20,40];
arr.sort((a, b) => a - b);
console.log(arr);










