module.exports = function getZerosCount(number) {
  var numbOfNulls = 0;
  while (number > 0) {
    number = Math.floor(number / 5);
    numbOfNulls = numbOfNulls + number;
  }
  return numbOfNulls;
}

