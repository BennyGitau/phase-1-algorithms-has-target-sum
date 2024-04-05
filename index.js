function hasTargetSum(array, target) {
  // Write your algorithm here
  //A function that takes an array,
  //iterate through the array and adds two numbers
  // compares the sum of two numbers with th target and returns true if they are equal

  
  //iteration
   for (let i=0; i<array.length; i++) {
    //O(n)
      const complement = target - array[i];
 
      for (let j= i+1; j<array.length; j++) {
        //O(n*n)

        if(array[j] === complement) return true;
        
      }
    }
    return false;
    /*
   //refactor
   
   seenNumbers= {}
    for (const number of array){
      const complement = target - number;

      if(complement in seenNumbers) return true
      seenNumbers[number] = true;
    }
    return false;
   */

}

hasTargetSum([1,2,3,4,], 5)
/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  space: O(n)
*/

/* 
  Add your pseudocode here
  iterate through the array
  find a number that is a complement to target (target - num = complement)
  iterate through the array to find the complement for the target
  if the compliment === number return true
  else at the end of iteration return false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, -3, 4, 13], 10));


}

module.exports = hasTargetSum;
