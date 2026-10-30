
//  1. Reverse a string (without reverse()
// Approach: I start from the last character of the string and go to the first one ,i add each character to new string.this way 
// the string is reversed without using reverse().
// Time complexity:O(n)
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log("1. Reverse:", reverseString("hello"));


// 2. Check palindrome
// Approach: We keep two pointers, one at the start and one at the end.
// If the characters at both pointers are different, it is not a palindrome.
// Otherwise we move both pointers inward until they meet.
// Time Complexity: O(n)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log("2. Palindrome:", isPalindrome("madam"));


// 3. Count vowels and consonants
// Approach: We convert the string to lowercase and check each character.
// If it is a letter, we count it as a vowel (a, e, i, o, u) or as a consonant.
// Spaces, digits and symbols are ignored.
// Time Complexity: O(n)
function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return "Vowels: " + vowels + ", Consonants: " + consonants;
}

console.log("3. Count:", countVowelsConsonants("Hello World"));


// 4. Second largest distinct number 
// Approach: We keep two variables, largest and second, and update them in a
// single loop. Duplicates of the largest number are ignored, so we get the
// second largest distinct number.
// Time Complexity: O(n)
function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  if (second === -Infinity) {
    return "No second largest";
  }
  return second;
}

console.log("4. Second Largest:", secondLargest([10, 5, 20, 8, 20]));


//  5. Remove duplicates (without Set)
// Approach: We create a new array and add an element only if it is not
// already present in it. This keeps the first occurrence of every element.
// Time Complexity: O(n^2), because includes() scans the result array.
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("5. Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 1]));


//  6. Sum of all even numbers
// Approach: We loop through the array and check each number with n % 2 === 0.
// If the number is even, we add it to the running sum.
// Time Complexity: O(n)
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log("6. Sum of Even:", sumEven([1, 2, 3, 4, 6]));


//  7. Frequency of a given element
// Approach: We loop through the array and increase a counter every time the
// element is equal to the target. The counter is returned at the end.
// Time Complexity: O(n)
function frequency(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

console.log("7. Frequency:", frequency([1, 2, 2, 3, 2], 2));


// 8. Check whether two strings are anagrams
// Approach: We convert both strings to lowercase and return false if their
// lengths are different. Then we sort the letters of both strings and compare
// them. If the sorted strings are equal, they are anagrams.
// Time Complexity: O(n log n), because of sorting.
function areAnagrams(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a.length !== b.length) {
    return false;
  }
  let sortedA = a.split("").sort().join("");
  let sortedB = b.split("").sort().join("");
  return sortedA === sortedB;
}

console.log("8. Anagram:", areAnagrams("listen", "silent"));


//  9. Move all zeros to the end
// Approach: We loop through the array, put all non-zero elements in a new
// array in the same order, and count the zeros. Then we add that many zeros
// at the end of the new array.
// Time Complexity: O(n)
function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}
console.log("9. Move Zeros:", moveZeros([0, 1, 0, 3, 12]));