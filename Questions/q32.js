// function that receives two numbers and returns the bigger number.
function biggerNum(){
    const promptSync=require("prompt-sync");
    let prompt=promptSync();
    let n1=prompt("enter first nbr");
    let n2=prompt("enter second nbr");
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
    }
    console.log(biggerNum());