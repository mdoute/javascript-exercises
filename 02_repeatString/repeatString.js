const string = "hey";
const repeatString = function() {
    let result = "";
    for (let i = 1; i < 4; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
