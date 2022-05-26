/*You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000 */
function duplicates(array,){
    //Make the magic happen
      //sort original array
     const newArray = array.sort((a,b) => a-b);
      if (newArray.length <= 1) return 0;
      
      let count = 0;
      
      for (let i = 0; i < newArray.length ; i++) {
        if (newArray[i] == newArray[i+1]) {
          count++;
          i++;
        }
      }
      return count
    }