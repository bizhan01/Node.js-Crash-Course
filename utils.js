function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 23;
}

module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
};
