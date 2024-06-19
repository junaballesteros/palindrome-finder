// palindrome.js

function findPalindromes(inputString) {
    const results = new Set();
    
    // Helper function to check if a substring is a palindrome
    function isPalindrome(substr) {
      return substr === substr.split('').reverse().join('');
    }
    
    // Iterate over all possible substrings and check if they are palindromes
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j <= inputString.length; j++) {
        const substr = inputString.slice(i, j);
        if (isPalindrome(substr)) {
          results.add(substr);
        }
      }
    }
    
    return Array.from(results);
  }
  
  module.exports = { findPalindromes };
  