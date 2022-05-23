//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
function squareArea(A){
 
    /*find area of the square encasing 
    the arc*/
  //length of radius =....  arclength(A)=(90/360)*(2pie)
  let radius = ((A*360/90)/(2*Math.PI));
 
  let area = radius*radius
  ;
  return Math.round(area*100)/100;
  //question why did math.round(x*100)/100 work for radius value while i was fixing area.
}