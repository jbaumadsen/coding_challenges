// from codewars.com Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


function divisors(integer) {
    let divisorsFound = [];
    for(i = 2; i < integer; i++){
        // console.log('i is : ' + i + ' and integer/i is : ' + integer/i);
        if(Number.isInteger(integer/i)) divisorsFound.push(i);
        if(Number.isInteger(integer/i)) console.log(i);
        // console.log(divisorsFound);

    }
    if(!divisorsFound[0]) return integer +" is prime";
    return divisorsFound;
}

console.log(divisors(15));


// better solution
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };
