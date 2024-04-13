// function that finds the index of a given character in a string
const findIndex=(string,char)=>{
    string=string.split('');
    let finds=string.indexOf(char);
    string=string.join('');
    console.log("the index of "+char+" in string "+string+" is " +finds)
    }
    findIndex('dependent girl','g');