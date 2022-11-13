const celciusTemperature = Number.parseInt(prompt("Введите значение температуры в градусах Цельсия: "));
const farenheitTemperature = (9 / 5) * celciusTemperature + 32;
alert(`Цельсий: ${celciusTemperature}, Фаренгейт: ${farenheitTemperature.toFixed(1)}`)