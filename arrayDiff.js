
// let removeArr = [3, 2];
// let mainArr = [1, 2, 3, 3, 2, 5, 3, 2, 1];

let removeArr = [1];
let mainArr = [1,2];

console.log('mainArr.length is : ' + mainArr.length);

function arrayDiff(a, b) {
    b.forEach((removeEntry) => {
        console.log('removeEntry is: ' + removeEntry);
        for(index = a.length - 1; index >= 0; index--) {
            console.log('index is : ' + index);
            if(removeEntry == a[index]) a.splice(index, 1);
        }
    })
    console.log(a);
    return a;
}

arrayDiff(removeArr, mainArr);


// better solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }