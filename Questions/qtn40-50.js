 // 40. Create a function that squares each element of an array
 function squareElements(arr) {
    return arr.map((num) => num * num);
  }
  
  // 41. Create a function that returns the first n elements of an array
  function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // 42. Create a function that removes the last element from an array
  function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  // 43. Create a function that sorts an array of numbers in ascending order
  function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 44. Create a function that checks if all elements in an array are positive
  function areAllElementsPositive(arr) {
    return arr.every((num) => num > 0);
  }
  
  // 45. Create a function that calculates the sum of the even numbers in an array
  function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  }
  
  // 46. Create a function that converts an array of strings to uppercase
  function convertToUppercaseArray(arr) {
    return arr.map((str) => str.toUpperCase());
  }
  
  // 47. Create a function that generates a random number between a given range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 48. Create a function that returns the reverse of an array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 49. Create a function that calculates the Fibonacci sequence up to n numbers
  function calculateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // 50. Create a function that checks if an array is sorted in ascending order
  function isSortedAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  