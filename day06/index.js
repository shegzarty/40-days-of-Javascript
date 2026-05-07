console.log("We are now learning Function");

//Definig a Fucntion

function fun (){
    console.log("Game");
}

//call or invoking function
fun();

//function as expression

let soccer = function(){
    console.log("A type of Game");
}

soccer();

//Parameters & Arguments

function sum(a, b){

    let summation = a + b;
    return summation;
}

let add = sum(5, 9);

function increase(x){
    return 3*x;
}
console.log(increase(add));

//Rest parameter
 function list(a, b, ...rest){

    console.log(a, b, rest);
 }
list(3,4,5,6,7,8,6,5,4);

//Nested Function

//Call Back Function

function greeting(name, time){
    console.log("Hello! " + name);
    
    time();

}
let dayTime = function(){
    console.log("Good Afternoon");
}

greeting("Esther", dayTime);

//Pure function
//is a function that returns the same output for the same input

/*HOF - Higher Orde Function
A higher-order function in JavaScript is a function that either accepts
another function as an argument (a callback) or returns a function as its result.*/

function retFun(){
    return function(){
        console.log("Hello");
    }
}

let returnFunc = retFun();
returnFunc();

//Arrow Function 
let run = () => {

} //does not require curly braces if it only takes a single like of code

//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is Cool. It excutes immediately");
})();

//Call Stack
