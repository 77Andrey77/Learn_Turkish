let rus = {
  
  buttonStart: 'Начать обучение',
  titleCardLevelA1: 'Простой турецкий для жизни Начальный уровень А1',
  titleCardLevelA2: 'Простой турецкий для жизни Базовый уровень А2',
  titleCardLevelB1: 'Простой турецкий для жизни Средний уровень В1',
  titleCardLevelB2: 'Простой турецкий для жизни и работы Уровень В2',

}

let ua = {
  
  buttonStart: 'Почати навчання',
  titleCardLevelA1: 'Простий турецький для життя Початковий рівень А1',
  titleCardLevelA2: 'Простий турецький для життя Базовий рівень А2',
  titleCardLevelB1: 'Простий турецький для життя Средній рівень В1',
  titleCardLevelB2: 'Простий турецький для життя і роботи Рівень В2',
  
}

changeLagnuage();

function changeLagnuage(){
  let language = lang.checked ? rus : ua;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })
}