/**
 * Function takes an array as parameter
 * give me the average of odd numbers in the array
 * 
 */

function oddAverage(numbers){

    const odds = [];
   for(const number of numbers){
    if(number % 2 === 1){

        odds.push(number);
    }
   }
// odds is the array that contains only the odd numbers
//    console.log(odds);
      let sum = 0;
      for(const number of odds){
           sum = sum + number;
      }
      const count = odds.length;
      console.log(sum, count);
      const avg = sum / count;
      return avg;
}

const numbers = [12, 43, 44, 87, 86, 93];
const avg = oddAverage(numbers);
console.log('This is the odd numbers average:',avg);