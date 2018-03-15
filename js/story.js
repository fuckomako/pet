// Генератор историй

let generateStory = function () {
  let story = [
              `Без труда не вынешь рыбку из труда`,
              `Как поработаешь так и отдохнешь`,
              `Хлеб всему голова`,
              `Кто не рабоатет тот ест`
  ];
  let btnStory = document.querySelector(`.btn-story`);
  let btnResult = document.querySelector(`.story-block`);
  btnStory.addEventListener(`click`, function (event) {
    event.preventDefault();
    let randomStory = story[Math.floor(Math.random() * story.length)];
    for (let i = 0; i < randomStory.length; i++) {
      btnResult.textContent = randomStory;
    }
  });
};
generateStory();
