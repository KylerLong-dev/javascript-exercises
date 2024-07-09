const repeatString = function (string, num) {
    let result = ""
    const errorMsg = "ERROR";

    if (num < 0) {
        return (errorMsg);
    }

    for (let i = 0; i < num; i++) {
        result += string;
    }

    return result;
};

const number = Math.floor(Math.random() * 1000);

repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
