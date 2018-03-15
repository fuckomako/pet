'use strict';
// Генератор историй

var generateStory = function () {
  var story = ['Без труда не вынешь рыбку из труда', 'Как поработаешь так и отдохнешь', 'Хлеб всему голова', 'Кто не рабоатет тот ест'];
  var btnStory = document.querySelector('.btn-story');
  var btnResult = document.querySelector('.story-block');
  btnStory.addEventListener('click', function (event) {
    event.preventDefault();
    var randomStory = story[Math.floor(Math.random() * story.length)];
    for (var i = 0; i < randomStory.length; i++) {
      btnResult.textContent = randomStory;
    }
  });
};
generateStory();
