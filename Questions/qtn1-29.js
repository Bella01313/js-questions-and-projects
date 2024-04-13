// 1. Create a function that returns the sum of 2 numbers
function sum(a, b) {
  return a + b;
}

// 2. Create a function that returns the product of 2 numbers
function product(a, b) {
  return a * b;
}

// 3. Create a function that returns the difference of 2 numbers
function difference(a, b) {
  return a - b;
}

// 4. Create a function that returns the division of 2 numbers
function division(a, b) {
  return a / b;
}

// 5. Create a function that receives an array and returns the sum of all the elements inside that array.
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 6. Create a function that receives an array and returns the greatest value inside that array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 7. Create a function that receives an array and returns the smallest number from that array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// 8. Create a function that receives an array of numbers and returns the average of the numbers
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// 9. Create a function that combines two arrays into one single array.
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 10. Create a function that displays a pattern like this:
function displayPattern1() {
  for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// 11. Create a function that displays a pattern like this:
function displayPattern2() {
  for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "1 ";
    }
    console.log(row);
  }
}

// 12. Create a function that displays a pattern like this:
function displayPattern3() {
  for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
      if (j <= i) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row);
  }
}

// 13. Create a function that displays a pattern like this:
function displayPattern4() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
      if (i === 1 || i === 5 || j === 1 || j === 5) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row);
  }
}

// 14. Create a function that displays a pattern like this:
function displayPattern5() {
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
      if (j === i) {
        row += "1 ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

// 15. Create a function to reverse the order of the elements inside the given array.
function reverseArray(array) {
  return array.reverse();
}

// 16. Given an array like this:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
// a. Create a function to sort and arrange these elements of the array in ascending order.
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
// 17. Create a function that determines the age classification of people
function getAgeClassification(age) {
  if (age >= 0 && age <= 12) {
    return 'MIMICRY';
  } else if (age >= 13 && age <= 19) {
    return 'SELF-DISCOVERY';
  } else if (age >= 20 && age <= 45) {
    return 'COMMITMENT';
  } else if (age >= 46) {
    return 'LEGACY';
  } else {
    return 'Invalid age';
  }
}

// 18. Create a function that calculates the BMI of a person and returns the specific classification
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

// 19. Create a function that counts the number of characters in a string
function countCharacters(str) {
  return str.replace(/\s/g, '').length;
}

// 20. Create a function that displays even numbers between 1 and 100
function displayEvenNumbers() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

// 21. Create a function that calculates the square of a number
function calculateSquare(number) {
  return number * number;
}

// 22. Create a function that checks if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// 23. Create a function that checks if a number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

// 24. Create a function that returns the maximum of two numbers
function getMax(a, b) {
  return Math.max(a, b);
}

// 25. Create a function that returns the minimum of two numbers
function getMin(a, b) {
  return Math.min(a, b);
}

// 26. Create a function that calculates the factorial of a number
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

// 27. Create a function that reverses a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 28. Create a function that checks if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

// 29. Create a function that displays odd numbers between 1 and 100
function displayOddNumbers() {
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
}
