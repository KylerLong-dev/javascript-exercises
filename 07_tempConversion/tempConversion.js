const convertToCelsius = function(fTemp) {
  const celsiusResult = (fTemp - 32) * (5/9);
  return parseFloat(celsiusResult.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  const farenheitResult = (cTemp * 9/5) + 32;
  return parseFloat(farenheitResult.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
