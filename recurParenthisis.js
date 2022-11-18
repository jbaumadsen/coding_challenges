// From coderbyte.com Bracket Combinations
//return the number of valid parenthisis combinations that can be made with a given number of pairs
function recurPar(unopened, open) {
    let up = 0;
    let down = 0;
    
    // console.log('unopened is : ' + unopened + ' open is : ' + open)
    // if (unopened) console.log('unopened is : ' + unopened);
    if(unopened) up = recurPar(unopened - 1, open + 1);
    // if(open) console.log('open is : ' + open);
    if(open) down = recurPar(unopened, open -1);
    // if (!unopened && !open) console.log('unopened is : ' + unopened + '  opened is : ' + open + '  neither');
    if (!unopened && !open) return 1;

    return up + down;
}

sum = recurPar(4, 0);
console.log(sum)

// better solution from another user sovles in O(n) time instead of recursively


function BracketCombinations(num) { 
    // By Doing sum search i found a formula that can achieve what this problem want
    // called Catalan number (Catalan Formula)
    // where catalan formula is ==> (2n!) / (n+1)! n!
    // first i will calculate the factorial of the num
    let factorial = (n) => {
        let k = 1;
        for(var i = n; i >= 1; i--){
            k *= i;
        }
        return k;
    }
    
    // formula going down
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
}