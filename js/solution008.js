/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.*/
function findDifference(a, b) {
    //loading...
    // multiply integers of individual arrays
    let volume = 1;
    let volume1 = 1;
    for(let i = 0; i < a.length; i++)
      volume = volume *a[i];
    for(let i = 0; i < b.length; i++)
      volume1 = volume1 *b[i];
    //below takes care to return positive integer
    if (volume > volume1 ){
      return volume - volume1;
    } else {
      return volume1 -volume;
    }
    
  }