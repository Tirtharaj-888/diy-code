// Multiplication tables solution using swith-case-break

// var num = 15;
// switch (num)
// {
//     case 8:
//         for(i=1;i<=10;i++)
//         {
//             console.log(`8 * ${i} = ${8*i}`);
//         }
//     break;
//     case 9:
//         for(i=1;i<=10;i++)
//         {
//             console.log(`9 * ${i} = ${9*i}`);
//         }
//     break;
//     case 12:
//         for(i=1;i<=10;i++)
//         {
//             console.log(`12 * ${i} = ${12*i}`);
//         }
//     break;
//     case 15:
//         for(i=1;i<=10;i++)
//         {
//             console.log(`15 * ${i} = ${15*i}`);
//         }
//     break;
// }

// if-else problems

// ----problem1
// let num2 = 15 
// if(num2==1){
//     console.log(`${num2} means light is ON`);
// }
// else if(num2==0){
//     console.log(`${num2} means light is OFF`);
// }
// else{
//     console.log(`${num2} is an invalid input. Only 0 & 1 are valid inputs for the light`);
// }

// ----problem2 
// using readlineSync for asking question and taking answer, using multiple conditions utilizing logical OR operator ||
// var rls = require('readline-sync');
// console.log("We need JS Engineers");
// firstQ = 'Do You know JS even a bit? ';
// var userAnswer = rls.question(firstQ);
// var goodies = 1;

// if (userAnswer === "y" || userAnswer === "Yes" || userAnswer === "YES" || userAnswer === "Y") {
//   console.log("That's great. You are hired!");
//   goodies = goodies * 10;
//   console.log("Goodies:", goodies, "Join us from tomorrow");
// } else if (userAnswer === "n" || userAnswer === "No" || userAnswer === "NO" || userAnswer === "N"){
//   console.log("That's Okay! Our doors are still open for You");
//   goodies = goodies * 5;
//   console.log("Goodies:", goodies, "Accept FREE JS Book");
// } else {
//   console.log("Please enter in terms of Yes or No")
// }

// Calculate product of three numbers using function

// function calcProduct(numOne, numTwo, numThree) {
//     var product = numOne * numTwo * numThree;
//     console.log("Number 1:", numOne, "Number 2:", numTwo, "Number 3:", numThree);
//     console.log('The product is:', product);
//     return product;
//   }
  
//   var result = calcProduct(100000, 12, 5);

