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


sum = recurPar(1, 0);
console.log(sum)

sum = recurPar(2, 0);
console.log(sum)

sum = recurPar(3, 0);
console.log(sum)

sum = recurPar(4, 0);
console.log(sum)
