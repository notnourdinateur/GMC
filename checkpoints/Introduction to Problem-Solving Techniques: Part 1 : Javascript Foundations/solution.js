/**
 * JavaScript Project 2 — Problem-Solving Techniques
 * ---------------------------------------------------
 * String Manipulation, Array, and Mathematical functions.
 *
 * Run with Node.js:  node solution.js
 */

/* =========================================================
 * 1. STRING MANIPULATION FUNCTIONS
 * ======================================================= */

/**
 * Reverse a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Count the number of characters in a string.
 * @param {string} str - The string to measure.
 * @returns {number} The character count.
 */
function countCharacters(str) {
  return str.length;
}

/**
 * Capitalize the first letter of each word in a sentence.
 * @param {string} sentence - The sentence to transform.
 * @returns {string} The capitalized sentence.
 */
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

/* =========================================================
 * 2. ARRAY FUNCTIONS
 * ======================================================= */

/**
 * Find the maximum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The largest value.
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * Find the minimum value in an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The smallest value.
 */
function findMin(arr) {
  return Math.min(...arr);
}

/**
 * Calculate the sum of all elements in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The total sum.
 */
function sumArray(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

/**
 * Filter an array based on a given condition.
 * @param {Array} arr - The array to filter.
 * @param {Function} condition - A predicate that returns true to keep an item.
 * @returns {Array} A new array with the items that pass the condition.
 */
function filterArray(arr, condition) {
  return arr.filter(condition);
}

/* =========================================================
 * 3. MATHEMATICAL FUNCTIONS
 * ======================================================= */

/**
 * Calculate the factorial of a number (n!).
 * @param {number} n - A non-negative integer.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negatives.
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Check whether a number is prime.
 * @param {number} num - The number to test.
 * @returns {boolean} True if num is prime, false otherwise.
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Generate the Fibonacci sequence up to a given number of terms.
 * @param {number} terms - How many terms to generate.
 * @returns {number[]} An array containing the sequence.
 */
function fibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/* =========================================================
 * DEMONSTRATION / TESTS
 * ======================================================= */

console.log("--- String Functions ---");
console.log("reverseString('hello'):", reverseString("hello")); // "olleh"
console.log("countCharacters('JavaScript'):", countCharacters("JavaScript")); // 10
console.log("capitalizeWords('hello world'):", capitalizeWords("hello world")); // "Hello World"

console.log("\n--- Array Functions ---");
console.log("findMax([3, 7, 2, 9, 4]):", findMax([3, 7, 2, 9, 4])); // 9
console.log("findMin([3, 7, 2, 9, 4]):", findMin([3, 7, 2, 9, 4])); // 2
console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5])); // 15
console.log(
  "filterArray([1, 2, 3, 4, 5, 6], even):",
  filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)
); // [2, 4, 6]

console.log("\n--- Mathematical Functions ---");
console.log("factorial(5):", factorial(5)); // 120
console.log("isPrime(7):", isPrime(7)); // true
console.log("isPrime(10):", isPrime(10)); // false
console.log("fibonacci(10):", fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Export for testing / reuse in other modules (Node.js).
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    reverseString,
    countCharacters,
    capitalizeWords,
    findMax,
    findMin,
    sumArray,
    filterArray,
    factorial,
    isPrime,
    fibonacci,
  };
}
