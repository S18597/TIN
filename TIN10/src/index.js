var temperatureConverter = require("./temperatureConverter");
var distanceConverter = require("./distanceConverter");

const celsiusId = "celsius";
const fahrenheitId = "fahrenheit";
const kelvinId = "kelvin";

const kilometersId = "input";
const milesId = "input";

window.onload = attachListeners;

function attachListeners() {
    document.getElementById(celsiusId).onchange = celsiusChangeListener;
    document.getElementById(celsiusId).oninput = celsiusChangeListener;
    document.getElementById(fahrenheitId).onchange = fahrenheitChangeListener;
    document.getElementById(fahrenheitId).oninput = fahrenheitChangeListener;
    document.getElementById(kelvinId).onchange = kelvinChangeListener;
    document.getElementById(kelvinId).oninput = kelvinChangeListener;

    document.getElementById(kilometersId).onchange = kilometersChangeListener;
    document.getElementById(kilometersId).oninput = kilometersChangeListener;
    document.getElementById(milesId).onchange = milesChangeListener;
    document.getElementById(milesId).oninput = milesChangeListener;
}

function celsiusChangeListener() {
    let convertedTemperatures = temperatureConverter.convertCelsius(Number(document.getElementById(celsiusId).value));
    document.getElementById(fahrenheitId).value = convertedTemperatures.fahrenheit;
    document.getElementById(kelvinId).value = convertedTemperatures.kelvin;
}

function fahrenheitChangeListener() {
    let convertedTemperatures = temperatureConverter.convertFahrenheit(Number(document.getElementById(fahrenheitId).value));
    document.getElementById(celsiusId).value = convertedTemperatures.celsius;
    document.getElementById(kelvinId).value = convertedTemperatures.kelvin;
}

function kelvinChangeListener() {
    let convertedTemperatures = temperatureConverter.convertKelvin(Number(document.getElementById(kelvinId).value));
    document.getElementById(celsiusId).value = convertedTemperatures.celsius;
    document.getElementById(fahrenheitId).value = convertedTemperatures.fahrenheit;
}

function kilometersChangeListener() {
    document.getElementById(milesId).value = distanceConverter.kilometersToMiles(Number(document.getElementById(kilometersId).value));
}

function milesChangeListener() {
    document.getElementById(kilometersId).value = distanceConverter.milesToKilometers(Number(document.getElementById(milesId).value));
}