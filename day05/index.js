console.log("We are Back");

// addition of even numbers 1 to 100

let sumOfEven = 0;

for (let even = 0; even <= 100; even++){
    if (even % 2 === 0){
        sumOfEven += even;

    }
   
    }
    console.log( sumOfEven );


// logging each character in a string set

let name = "Michael Jones";

for (let n = 0; n <= name.length; n++){
    console.log(name.charAt(n));
}

//nested loop

for (let i=1; i<=4; i++){
    for (let j=2; j<=5; j++){;

    console.log("Row " + i, " Coloumn" + j);
    }

}





// multiple counters for a single loop

for (let i=3, j=2; i=5, j=9; i++, j-- ){

    console.log(i, j);
}

//while loop
let counter = 0;
while (ocunter < 10){
    console.log(counter);
    counter++;


}

//do-while loop

