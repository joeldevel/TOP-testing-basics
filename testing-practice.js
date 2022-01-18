function capitalize(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.substr(1);
}

function reverseString(str) {
    if(!str) return str;
    let reversedString = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

module.exports = {capitalize, reverseString};
