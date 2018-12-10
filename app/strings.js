stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
      const adjacentChars = {};
      const resultArr = [];
      const strArr = str.split('');
      let lastChar = ' ';

      strArr.forEach(char => {
          // Detect when character changes and zero out total for 
          // previous character (in case previous character repeats
          // later in string
          if (char !== lastChar) {
              adjacentChars[lastChar] = 0;
              lastChar = char
          }
          // If character never seen or seen earlier, init count to 1
          if (!adjacentChars[char] || adjacentChars[char] === 0) {
              adjacentChars[char] = 1;
          }
          // Charcter is repeating, increment counter
          else {
              adjacentChars[char] += 1;
          }
          // Add character to string array as long as count is less than
          // target amount
          if (adjacentChars[char] <= amount) {
              resultArr.push(char);
          }
      });

      return resultArr.join('');
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
      return str.split('').reverse().join('');
  },
};
