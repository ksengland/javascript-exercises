const palindromes = function (string) {
    reverse =  string.toLowerCase().replace(/[^A-Za-z]/g, "");
return (
    reverse
    .split("")
    .reverse()
    .join("") == reverse
);
};

// Do not edit below this line
module.exports = palindromes;
