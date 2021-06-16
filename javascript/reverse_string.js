
function reverseString(str) {
  let newString = '';
  
  for(let i = str.length - 1; i >= 0; i--){
    newString = newString + str[i];
  }

  return newString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'xof nworb kciuq ehT'");
  console.log("=>", reverseString("The quick brown fox"))

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

/* 
Take in a string
Iterate over each character of the string (use for loop)
For loop iterates backwards over the string 
  changes the indices of the characters to their new, reversed position by adding each 
  character to the new string one at a time on each loop iteration until reaching index 0
return the new string 
*/

// And a written explanation of your solution

/*
reversing a string
1. takes in a string
2. declares 'newString' to equal empty string
3. for loop
4. sets incrementer to equal str.length - 1 (meaning it is starting at the back of the string using the last index #)
5. sets condition to be less than or equal to 0 (meaning once we get to index 0, end the loop)
6. decrements i counter each time to move backwards through the string
7. each turn through the loop adds the character at str[i] to newString, since we started at the end of 'str', we get a reversed string
8. return the new string
*/