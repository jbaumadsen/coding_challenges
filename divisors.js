


function divisors(integer) {
    // if(!Number.isInteger(integer)) return "not an integer";
    let divisorsFound = [];
    for(i = 2; i < integer; i++){
        console.log('i is : ' + i + ' and integer/i is : ' + integer/i);
        if(Number.isInteger(integer/i)) divisorsFound.push(i);
        if(Number.isInteger(integer/i)) console.log(i);
        console.log(divisorsFound);

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
