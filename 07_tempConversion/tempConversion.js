const convertToCelsius = function(farenheitTemp) {
  let celciusTemp = (5/9) * (farenheitTemp - 32);
  let roundedTemp = Math.round(celciusTemp * 10) / 10
  return roundedTemp;
};

const convertToFahrenheit = function(celciusTemp) {
  let farenheitTemp = celciusTemp * (9/5) + 32;
  let roundedTemp = Math.round(farenheitTemp * 10) / 10
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
