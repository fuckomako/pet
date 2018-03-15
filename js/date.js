'use strict';

//  Дата + Приветствие
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var currentMessage = 'Салам Босс:';
var Month;

switch (currentMonth) {
  case 0: Month = 'Января';
    break;
  case 1: Month = 'Февраля';
    break;
  case 2: Month = 'Марта';
    break;
  case 3: Month = 'Апреля';
    break;
  case 4: Month = 'Мая';
    break;
  case 5: Month = 'Июня';
    break;
  case 6: Month = 'Июля';
    break;
  case 7: Month = 'Августа';
    break;
  case 8: Month = 'Сентября';
    break;
  case 9: Month = 'Октября';
    break;
  case 10: Month = 'Ноября';
    break;
  case 11: Month = 'Декабря';
    break;
}
var currentDateView = (currentMessage + ' ' + ' Сегодня ' + currentDay + ' ' + Month + ' ' + currentYear + ' Года');
document.querySelector('.date-container').textContent = currentDateView;
