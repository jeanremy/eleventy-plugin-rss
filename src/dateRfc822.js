const decompose = require("./decompose");

module.exports = function(date) {
  const { dayName, day, monthName, year, hours, minutes, seconds } = decompose(
    date
  )
  return `${dayName}, ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds} +0000`
};