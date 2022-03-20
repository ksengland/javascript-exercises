const repeatString = function(greeting, times) {
if (times < 0) return 'ERROR'
let string = ''
for (let i = 0; i < times; i++) {
        string += greeting;
}
 return string   
};
// Do not edit below this line
module.exports = repeatString;
