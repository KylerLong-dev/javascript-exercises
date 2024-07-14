const removeFromArray = function(array, ...removedItems) {
    
    for (let removed of removedItems) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === removed && typeof(array[i]) === typeof(removed)) {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;

}

// Do not edit below this line
module.exports = removeFromArray;
