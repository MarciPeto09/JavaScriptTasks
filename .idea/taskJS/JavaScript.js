
//2 numeric variables on which you will perform basic mathematical operations
//and display the results of these operations on the console, each on a separate line

const number1 = 2;
const number2 = 2;
const numeric = number1 + number2;

console.log(numeric);

//you will use the if else conditional statement to display information on the console
 //about the number that is bigger and the one that is smaller

 if(number2 > number1){
 console.log("Numeri 2 eshte me i madh se numeri 1")
 }else if(number2 === number1){
    console.log("Numerat jane njesoj!")
 }else{
 console.log("Numeri 1 eshte me i madh se numeri 2")
 }


 //you will use a for loop to calculate the sum of all numbers from lower to higher (inclusive)
  //and display the obtained sum on the console

  let array = [2,4,1,5];
  array.sort();
  let sumArray = 0;
  for(let i = 0; i < array.length; i++){
  sumArray += array[i];
  }
  console.log("Shuma e array eshte:" + Number(sumArray));


  //you will write the function showSum, which will take two numbers and based
   //on the previous algorithm will display the obtained sum in a dialog window (alert)

   function showSum(a, b){
        return a + b;
   }
   alert("Show sum: " + showSum(1,2));

   //you will call the function showSum on a set of 3 different pairs of values

   alert("Show sum: " + showSum(1,2));
   alert("Show sum: " + showSum(2,2));
   alert("Show sum: " + showSum(7,2));