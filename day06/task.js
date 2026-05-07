//1. Write a Function to Convert Celsius to Fahrenheit


function conversion(celcius){
    let fahrenheit = (1.8 * celcius) + 32;

        return fahrenheit;

}

console.log(conversion(22));

//2. Create a Function to Find the Maximum of Two Numbers

function max(a, b){
   if (a > b){
    console.log("A is Bigger");
   }else {
    console.log("B is Bigger");
   }
}
max(12, 8);

function big(a, b){
    findMax = a > b ? console.log("A is Max") : console.log("B is Max");
    
 }
 big(-9, -1);
 

 /* 3. Function to Check if a String is a Palindrome
 Create a function isPalindrome(str) that checks if a given string is a palindrome 
 (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/
function reverse(str){
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--){

    rev += str.charAt(i);
    
}
if (str !== rev){
    console.log("Not Palindrome");

}else console.log("It is Palindrome")
}

reverse("yes");

// reverse string 2
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//reverse count
let increase = "";
for (let i = 1; i <= 10; i++){
 
    increase += i;
}
console.log(increase);

//4. Write a Function to Find Factorial of a Number

let fac = 1;
function  factoria(f){
    for (let i = f; i >= 1; i--){
    fac *= i; 
    
    }
    return fac;
}
console.log(factoria(5));

/*5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of 
vowels (a, e, i, o, u) in a given string.*/

/* Didn't Get it

let words = 0;
function countVowels(str){
    for (let i= 0; i <= words.length; i++ ){
        if (str.charAt ==="a" || str.charAt ==="e" 
        || str.charAt ==="i" || str.charAt ==="o" || str.charAt ==="u"){
            words += str(i);
        }
    }
    return words;
}
console.log(countVowels("Hello")); 
*/

//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

//7. Use an IIFE to Print “Hello, JavaScript!”
(function iife(name){
    console.log("Hello, " + name);
}
)("JavaScript!")

/*8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
*/
function greet(name, callback){
    console.log("Good day, " + name);
    callback();

}
let timeOfDay = function(){
    console.log("It is almost Evening");
}
greet("Adekunle", timeOfDay);

/* 9. 9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();

solution:

for this function execution, since f2 was the only function invoked, f2 enters the callstack first,
but since it need f1 to complete it's execution, f1 enters the call stack.
So, f1 executes first and leaves the call stack for f2 to execute. When f2 execution is 
completed it leave the call stack and the stack is empty.

*/  

/* 10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();

solution:

f2 is invoked first, so it enters the call stack and leaves immediately after the function execution;
when f3 is invoked, f3 enters the callstack,but since it need f1 to complete its execution, f1 enters the call stack.
So, f1 executes first and leaves the call stack for f3 to execute. When f3 execution is 
completed it leave the call stack and the stack is empty;
f1 is invoked last, it enters the call stack and leaves immediately after the function execution.
*/