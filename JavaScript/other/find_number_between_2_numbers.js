//get number from user
/*
let value = 121;
console.log(value);

while ((value >= 100) || (value <= 50)) {
    console.log(value);
    console.log("pick another number!");
}

console.log("test");
*/


// ========== ========== ========== ========== ==========


//get number from user
let user_num = Number(prompt("Enter a number:"));

//conditional logic for loop
while ((user_num <= 50) || (user_num >= 100)) {
    //reassign number if it's more then 100, or below 50
    user_num = prompt("wrong number, try again:");
}

//otherwise alert the user they are correct
alert("You win!");
