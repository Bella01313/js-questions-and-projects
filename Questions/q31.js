//function returning square root of a given question
function squareRoot(){
    const promptSync=require('prompt-sync');
    let prompt=promptSync();
    let nbr=prompt("enter a number");
    let sRoot=Math.sqrt(nbr);
    return sRoot;
    }
    console.log(squareRoot());