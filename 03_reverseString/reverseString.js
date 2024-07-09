//creat a variable to store the string parameter as an array
//split method with empty string for selector will create an array of characters
//reverse the characters in the array using reverse method
//convert the array back to a string and return output with join method using empty string for selector again

const reverseString = function(string) {
    let array = string.split("");
    array.reverse();
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
