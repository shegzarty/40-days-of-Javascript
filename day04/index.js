console.log("Yea");


//if statement

let age = 19;

if (age >= 18) {
    console.log("You're eligible to vote")
} else{
    console.log("Sorry, come back when you are 18 years old")
}

//switch statement

let weekDay = 6;
switch (weekDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        consolel.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("You have entered the wrong Day Number");
        
}

//2.
let continent = "Togo";
switch (continent){
    case "Nigeria":
    case "Ghana":
    case "Cotonuo":
    case "SouthAfrica":
    case "Kenya":
    case "Egypt":
    case "Algeria":
    case "Tunisia":
    case "Togo":
        console.log("An African Country");
        break;
    case "Afghanistan":
    case "Armenia":
    case "Azerbaijan":
    case "Bahrain":
    case "Bangladesh":
    case "Bhutan":
    case "Brunei":
    case "Cambodia":
    case "China":
    case "Cyprus":
    case "Georgia":
    case "India":
    case "Indonesia":
    case "Iran":
    case "Iraq":
    case "Israel":
    case "Japan":
    case "Jordan":
        console.log("An Asian Country");
        break;
    case "Albania":
    case "Andorra":
    case "Austria":
    case "Belarus":
    case "Belgium":
    case "Estonia":
    case "Finland":
    case "France":
    case "Germany":
    case "Greece":
    case "Hungary":
    case "Iceland":
    case "Ireland":
    case "Italy":

    default:
        console.log("Reset");

}


//ASSIGNMENT

//1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// the code above will return the default value because the string value passed is different from the case value

//2. Build an ATM Cash Withdrawal System
 
let withdrawal = 3;
let axisBankATM = 100;
let successfulWithdrawal = withdrawal * axisBankATM;

if (successfulWithdrawal >= 100) {
    console.log("Withdrawal Successful");
}else{
    console.log("invalid amount");
}


//3. Build a Calculator with switch-case
 let numb1 = 18;
 let numb2 = 4;
 let operator = "/";
 
switch (operator){
    case "+":
        console.log(numb1 + numb2);
        break;
    case "-":
        console.log(numb1 - numb2);
        break;
    case "*":
        console.log(numb1 * numb2);
        break;
    case "/":
        console.log(numb2 !== 0 ? numb1/numb2 : "change the denominator");
        break;
    
}

//4. Pay for your movie ticket
/*Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/

let ticketAge = 62;

if (ticketAge <= 18){
    console.log("Thanks for watching. Your movie ticket is $3.");
} else if (ticketAge <= 60){
    console.log("Thanks for watching, you are to pay $10.");
} else {
    console.log("Thanks for watching. Your movie ticket is $8.");
}

/* 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) 
based on a person’s birth month. Make it month bases, not date based. 
Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/

let zodiac = "October";
switch (zodiac){
    case "December":
    case "January":
        console.log("Capricorn");
        break;
    case "January":
    case "February":
        console.log("Aquarius");
        break;
    case "February":
    case "March":
        console.log("Pisces");
        break;
    case "March":
    case "April":
        console.log("Aries");
        break;
    case "April":
    case "May":
        console.log("Taurus");
        break;
    case "May":
    case "June":
        console.log("Gemini");
        break;
    case "June":
    case "July":
        console.log("Cancer");
        break;
    case "July":
    case "August":
        console.log("Leo");
        break;
    case "August":
    case "September":
        console.log("Virgo");
        break;
    case "September":
    case "October":
        console.log("Libra");
        break;
    case "October":
    case "November":
        console.log("Scorpio");
        break;
    case "November":
    case "December":
        console.log("Sagittarius");
        break;
    default:
        console.log("Input your birth month to know your zodiac sign.")
}

//5. Which Triangle?

let sides = 10;

if (sides >= 4){
    console.log("Invalid sides of Triangle");
} else if(sides === 3){
    console.log("Equilateral Triangle");
}else if(sides === 2){
    console.log("Isosceles Triangle");
} else{
    console.log("Scalene Triangle");
}


//Day 05 ASSIGNMENT
//Generate a Pyramid Pattern using Nested Loop

let pyramid = "";

for (let i= 0; i<= 5; i++ ){
      for (let j= 1; j<=5; j++);
      pyramid += "*"; 
    console.log(pyramid);
        
}

//Craete Multiplication Table (Using for loop)

let f = 3;
for (let n=1; n<=12; n++){
    console.log (n * f);

}


//Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for (let odd= 1; odd<= 500; odd++){
    if (odd %2 !== 0){
        sum += odd;
        
    }
    
}
console.log(sum);

//4. Skipping Multiples of 3

for (let i=1; i<=20; i++){
    if(i % 3 === 0) continue;
    console.log(i);
}


//5. Reverse Digits of a Number (Using while loop)

let numb = "6789";

while(let i = numb.length ){
    i <= numb.length;
    console.lot(charAt(i));

    i--
}