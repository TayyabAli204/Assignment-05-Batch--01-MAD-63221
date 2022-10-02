// IF ELSE EXCERCISE

// 1---> Write a ts program to find maximum between two numbers.
// for brower like chrome
// 

// // var num1:number = 12;
// // var num2:number = 34;

// var num1:any = prompt("Enter your firstNumber"); 
// var num2:any = prompt("enter your secondNumber");
// if (num1 > num2){
//     console.log("num1 is maximum");
// }
// else {
//     console.log("num2 is maximum");
    
// }

// 2---> Write a ts program to find maximum between Three numbers.

// var num1:number = 5;
// var num2:number = 7;
// var num3:number = 12;

// var num1:any = prompt("Enter your FirstNumber"); 
// var num2:any = prompt("enter your SecondNumber");
// var num3:any = prompt("enter your ThirdNumber");



// if (num1 > num2 && num1 > num3){
//     console.log("num1 is maximum");
// }
// else if(num2 > num1 && num2 > num3) {
//     console.log("num2 is maximum");
    
// }else {
//     console.log("num3 is maximum");
    
// }




// 3 ---> ts program to check number are postive or nagative



// var num:any = prompt("Enter your number");

// if (num > 0){
//     console.log("number is positive");
// }
// else if( num < 0 ){
//  console.log("Number is nagetive");
 
// }    
// else if(num == 0){
//     console.log("Number is zero ");
    
// } else{
//     console.log("number is either +ve , -ve or zerro");
    
// }


// 4---> write a ts program to check number is divide by 5 or 11 or not?


// var num : any = prompt("Enter your Number")

// if(num % 5 == 0){
//     console.log("number is divided by 5 ");
// }
// else if( num % 11 == 0){
//     console.log("number is divide by 11");
// }
// else{
//     console.log("number is not divided by 5,11");
    
// }


// 5 ----> ts program to check number is even and odd

// var num : any = prompt("Enter your number")
// if(Number(num)){

//     if( num % 2 == 0 ){
//         console.log("number is Even");
        
//     }
//     else{
//         console.log("number is Odd");
        
//     }

// }

//    else{
//     console.log("number is not even or odd");
    
//    }


// 6 -----> ts program to check leap years


// var num : any = prompt("Enter A year ")

// if( num % 4 == 0){
//     console.log("This year is a Leap year");   
// }
// else{
//     console.log("This is Not a leap year");
    
// }



// 7--> ts program to check character are alphabet or not?

// var num :any = prompt("Enter Some character")

// if( num >= "a" && num <= "z" || num >= "A" && num <= "Z"){
//     console.log("Charachter is An Alphabet");   
// }
// else{
//     console.log("Character is not Alphabet");
    
// }

// 8--> ts program to check character are vowel and Constant?

// var num :any = prompt("Enter Some character")

// if( num >= "a" && num <= "z" || num >= "A" && num <= "Z"){
    
    
//     if( num == "a"  || num == "e" || num == "i" || num == "o" || num == "u" ||
//      num == "A"  || num == "E" || num == "I" || num == "O" || num == "U") {
//         console.log("Character Are Vowel");
        
//      }
//     else{
//         console.log("Character are Constant");
        
//     }
   
// }
// else{
//     console.log("Character is not Alphabet");
    
// }


// 9---> ts program to check  a character are alphabet , digits or special character

// var num : any = prompt("Enter some Character")

// if(num >= "a" && num <= "z" || num >= "A" && num <= "Z"){
//     console.log("Character are Alphabet");
// }
// else if( num >= -Infinity && num <= +Infinity){
//     console.log("Character are Digits");
// }
// else{
//     console.log("Character are Special ");
    
// }


// 10 ----> ts program to check wether character are UpperCase and LowerCase Alphabet


// var num : any = prompt("Enter Some Character")

// if( num >= "a" && num <= "z" ){
//     console.log("Character are LowerCase");
    
// }
// else if( num >= "A" && num <= "Z"){
//     console.log("Character are UpperCase");
    
// }else{
//     console.log("Character are NOT ALPHABET");
    
// }



// =====>>>>11. Write a ts program to print day of week name using switch case.

// var week: string = "Monday";

// switch (week) {
//         case "1":
//         console.log("Monday");
//         break;
//         case "2":
//         console.log("Tuesday");
//         break;
//          case "3":
//         console.log("Wendenday");
//         break; 
//         case "4":
//         console.log("Thursday");
//         break; 
//         case "5":
//         console.log("Friday");
//         break;
//          case "6":
//         console.log("Saturday");
//         break;
//         case "7":
//         console.log("Sunday");
//         break;
//         default: 
//             ("Invalid input! Please enter week number between 1-7");
// }
// console.log(week);


// =====>>>>12. Write a ts program print total number of days in a month using switch case.

// var month: string = "3";
// console.log(month);
// switch (month) {
//         case "1":
//         console.log("31 days");
//         break;
//         case "2":
//         console.log("28/29 days");
//         break;
//          case "3":
//         console.log("31 days");
//         break; 
//         case "4":
//         console.log("30 days");
//         break; 
//         case "5":
//         console.log("31 days");
//         break;
//          case "6":
//         console.log("30 days");
//         break;
//         case "7":
//         console.log("31 days");
//         break;
//         case "8":
//         console.log("31 days");
//         break; 
//         case "9":
//         console.log("30 days");
//         break;
//         case "10":
//         console.log("31 days");
//         break;
//         case "11":
//         console.log("30 days");
//         break;
//         case "12":
//         console.log("31 days");
//         break;
//         default: 
//             ("Invalid input! Please enter month number between 1-7");
// }

