var celciusTemperature = parseInt(prompt("Введите значение температуры в градусах Цельсия: "));
var result = ((9 / 5) * celciusTemperature + 32).toFixed(1);
alert(`Цельсий: ${celciusTemperature}, Фаренгейт: ${result}`)