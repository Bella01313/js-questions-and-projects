//function counting number of vowels in string
function vowelsCounter(a){
    let vowels=['a','i','e','u','o'];
    a=a.split('');
    let count=0;
    for(let i=0;i<a.length;i++){
        if(vowels.includes(a[i])){
            count+=1;
        }
    }
    a=a.join('');
    console.log("number of vowels in string "+a+" is "+count);
    }
    vowelsCounter('uwineza');