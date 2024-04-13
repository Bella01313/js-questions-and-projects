//a function that counts the number of consonants in a string.
const consonantsCounter=(b)=>{
let counter=0;
b=b.split('');
let vowels=['a','i','e','u','o'];
for(let i=0;i<b.length;i++){
    if(!vowels.includes(b[i])){
        counter+=1;
    }
}
b=b.join('');
console.log("the number of consonants in a string "+b+" is:"+counter)
}
consonantsCounter('terry');