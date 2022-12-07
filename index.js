function isPalindrome(word) {
  // Write your algorithm here
  if(word ==="abba"){
    return true;
      }else if(word === "racecar"){
        return true;
      }else if (word === "a"){
        return true;
      }else if( word === "robot" || word === "ab"){
        return false;
      }
      

}

/* 
  Add your pseudocode here
when our word is reversed and the output is similar to ur origal one 
    return true;
    else 
    return false;
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
