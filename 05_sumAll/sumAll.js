const sumAll = function(a, b) {
    if ((a < 0 || b < 0) || (typeof a !== 'number' || typeof b !== 'number')) {
        return `ERROR`;
    }

    let sum = 0; 
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

/* Alternatively inline the [min, max] variables: 
const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return NaN;
    }

    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;
