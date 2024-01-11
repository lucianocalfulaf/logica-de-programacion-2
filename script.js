function convertirTemperatura() {
  while (true) {
    let temperaturaCelsius;

    do {
      let userInput = prompt("Ingrese la temperatura en grados Celsius (o escriba 'salir' para terminar):");

      if (userInput.toLowerCase() === 'salir') {
        return;
      }

      temperaturaCelsius = parseFloat(userInput);

      if (isNaN(temperaturaCelsius)) {
        alert("Error: Por favor, ingrese un número válido.");
      }
    } while (isNaN(temperaturaCelsius));

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    document.write(`Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} °F`);
    document.write(`Temperatura en Kelvin: ${temperaturaKelvin.toFixed(2)} K`);
  }
}

convertirTemperatura();