console.log("This is the Day 3")

// Take a number and find if the number is an odd or even number
// Print the number and result in the console.

let even = 89;

even % 2 === 0 ? console.log("This is a Even Number") : console.log("This is a odd Number");

//Do you have a Driving License?

let age = 24;

age >= 18 ? console.log("Please continue driving.") : console.log ("You're a minor and ineligible to drive.");

//Calculate CTC with a Bonus
//You get 12,300 rupees as your monthly salary.
//You get a 20% bonus on your annual salary.
//How much money do you make per annum as a CTC?

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let annualBonus = 1.2;  // 20%
let grossPay = annualSalary * annualBonus;
console.log(grossPay)

//Write a program for the Traffic Light Simulation

let go = "Green Light";
let stop = "Red Light";



//Create an Electricity Bill Calculator
//Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
let monthlyUnit = 100;
let unitCost = 150;
let monthlyCost = unitCost * monthlyUnit;
let annualCost = monthlyCost * 12;
let annualDiscount = annualCost * 0.2;
console.log(annualCost - annualDiscount);


//Leap Year Checker
let year = 2025;
let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? console.log("Welcome to the Leap Year") : console.log("This is not a Leap Year");

//Max of Three Numbers
let p = 651;
let q = 358;
let r = 800;


//Bitwise Doubling
let count = 5;
let shift = count << 1;
console.log(shift);



