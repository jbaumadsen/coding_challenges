// from codewars.com Roman Numerals Decoder 

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function letterToValue(letter) {
    let value = letter == 'M' ? 1000 
    : letter == 'D' ? 500 
    : letter == 'C' ? 100 
    : letter == 'L' ? 50 
    : letter == 'X' ? 10 
    : letter == 'V' ? 5 
    : letter == 'I' ? 1 
    : 0;
    console.log('letter : ' + letter + '  value : ' + value);
    return value;
}

function upOrDown(valueArray, index) {
    console.log(valueArray);
    return valueArray.length > index + 1 && valueArray[index + 1] > valueArray[index] ? -1 
        : valueArray[index] == valueArray[index + 1] ? upOrDown(valueArray, index + 1) 
        : 1; 
}

function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let stringArray = [...roman];
    let valueArray = stringArray.map(element => letterToValue(element));
    // console.log(valueArray);
    let sum = 0;

    for (i = 0; i < stringArray.length; i++) {
        sum += upOrDown(valueArray, i) * valueArray[i];
        console.log(sum);
    }
    console.log('the sum is ' + sum);

    return sum;
}

solution('MDDMDY');

// best practices

function solution(roman)
{
    var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    var numbers = roman.split('');
    var sum = 0, i;

    for(i = 0; i < numbers.length; i++) {
        if(data[numbers[i]] < data[numbers[i+1]]) {
            sum += data[numbers[i+1]] - data[numbers[i]];
            i++;
        }
        else {
            sum += data[numbers[i]];
        }
    }
    
    return sum;
    }