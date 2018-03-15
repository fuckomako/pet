'use strict';
// Генератор цвета

setInterval(function () {
  var generateColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = generateColor;
}, 3000);
