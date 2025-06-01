let ch = 'hello';
countOccurence = 0;
target = 'l';
for(let i=0; i<ch.length;i++){
if(ch[i]==target){
    countOccurence++
}
}
console.log(countOccurence);


//16 .6 large number in array do with loop

let arr = [10, 20, 30];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Largest number is:", max);  


//16.5 Sum and Average of array element

let arr2 = [1,9,8]
let sum = 0;
for(i=0; i<arr2.length; i++){
    sum = sum+arr2[i];
}
    let avg = sum / arr2.length;
    console.log(avg);
 console.log(sum);



