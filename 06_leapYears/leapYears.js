const leapYears = function(year) {
//is year / 4? && is year not / 100? = leap
//is year / 4? && is year / 100? &&  year/ 400? = leap
//if not = not leap
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
};

// Do not edit below this line
module.exports = leapYears;
