// for( let i=0 ; i<10;i++){
//     console.log(i);
// }
// let i=1;
// while (i<10) {
//     console.log(i);
    
// }
// i++;
// Switch case
// first type of scenario
// we will compare the value of the variable directly
//  let a=10;
//  switch(a){
//      case 10:
//          console.log("value is 10");
//         //  break;  breaks the flow
//       default:
//           console.log("value is not 10");
//  }


// switch(true)
// {
//     case a>0:
//     console.log("positive");
//     break;
//     case a<0:
//     console.log("Negative");
//     break;
//     default:
//     console.log("Zero Value");
//     break;
// } 




// for(i=0; i<10;1++){we can do declaration outside we have to put semicolon
// console.log("value of i is"+i);
// }




// let a=0;
// for(; a<10;a++){we can do declaration outside we have to put semicolon

// }
// we cannot put condition outside 
// let a=0;
// for(; a<10;{we can do declaration outside we have to put semicolon
// a++) we can put increment or decrement after we execute the code but within the same loops
// }


// while loop
//  we have to write condition properly

// let i=0;
// while(condition){
//     console.log("value of i is",i);
//    i++;
// }
// console.log("Outside loop");

// Do While

// let p=0;

//  do
//  {
//     console.log("value of p is",p);
//     p++;
// }
// while(p>10);
//  nested loops
// for(let b=0;b<10;b++){
//     for(let K=0;k<5;k++){
//     console.log("vale is",b ,k);
//   }
// }
//  for one iteration of b and k will run 
// for i<5 and j<2  j will run 2 times wrt to i total 10 times

//  let a=10;
// let b=20;
// let addition=a+b;
// console.log(addition);
// // function add(){ function definition
//     console.log(a+b);
// }
// // add(); function execution
// function addtwoNumbers(a,b){function with parameter
//     console,log(a+b);
// }
// addtwoNumbers(12,13);
// we can access function before declaration rather than in case of variables
let a=30;
let b=40;
function add(){
    console.log(a+b);
}
add(a+b);