'use strict';

// Расчет денег
var calculateMoney = function () {
  var btn = document.querySelector('.btn');
  var popup = document.querySelector('.money-block');
  var result = document.querySelector('.money-block__value');
  var field = document.querySelector('.field');
  var hint = document.querySelector('.money-block--hint');
  var sum = 0;
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('money-block--show');
    if (field.value === '') {
      alert('Пустая строка!');
    }
    sum += +field.value;
    result.textContent = sum + ' руб';
    field.value = ' ';
  });
};
calculateMoney();
