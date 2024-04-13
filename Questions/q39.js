//a function that checks if a given value is present in an array.
let checkIfPresent=(arr,value)=>{
    let check=arr.includes(value);
    if(check){
        console.log(value+" includes in array "+arr);
    }
    else{
        console.log(value+" not included in array "+arr)
    }
    }
    let elements=[1,2,.5,677,89,754,56,12,9];
    checkIfPresent(elements,677);
    checkIfPresent(elements,23);