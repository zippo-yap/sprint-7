/* Minimum
======================*/
// Define a function that takes two parameters as arguments
function min (a, b){
    return a < b ? a:b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* Recursion
======================*/
// Define a function that takes one parameter
function isEven (n) {
    // Set a terminatation condition
    if (n < 0){
        return;
    }
    // Base case
    if (n === 0 || n === 1){
        return n === 0;
    }
    else{
    // Define a new argument n-2
    //Recursively call the function
    return isEven(n - 2);
    }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/* Bean Counting
======================*/
//Create a function that takes a string as a parameter
function countBs (string) {
    // Make use of countChar
    return countChar(string, "B");
};

function countChar (string, letter) {
    // Track how many of 'letter'
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (string.charAt(i) === letter){
            count++;
        }
    }
    return count;
};


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
