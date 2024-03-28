const removeFromArray = function(array, ...indices) {
    let newArray = []
    array.forEach((item) => {
        if (!indices.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

/* Attempt 1
const removeFromArray = function(array, indices) {
    for (let i = 0; i < array.length; i++) {
        if (indices.includes(i)) {
            array.splice(i, 1);
        }
    }
    return array;
};*/

// Do not edit below this line
module.exports = removeFromArray;
