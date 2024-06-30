// Функция для переключения содержимого
  function toggleContent(event) {
    // Находим элемент содержимого, который следует сразу за заголовком
    const content = event.target.nextElementSibling;
    
    // Если элемент содержимого существует и имеет класс 'task-content'
    if (content && content.classList.contains('task-content')) {
      // Переключаем класс 'active' для отображения/скрытия содержимого
      content.classList.toggle('hidden');
    }
  }

  // Находим все элементы с классом 'header'
  const headers = document.querySelectorAll('.task-header');

//   Добавляем обработчик события 'click' для каждого заголовка
  headers.forEach(header => {
    header.addEventListener('click', toggleContent);
  });

// Универсальная функция для переключения видимости

function toggleContentVisibility(headerSelector, contentSelector) {
    // Находим элементы по переданным селекторам
    const headerEl = document.querySelector(headerSelector);
    const contentEl = document.querySelector(contentSelector);

    // Функция для переключения класса 'task-hidden'
    function toggleTaskContentHidden() {
        contentEl.classList.toggle('hidden');
    }

    // Добавляем обработчик события 'click' к элементу заголовка
    headerEl.addEventListener('click', toggleTaskContentHidden);
}

// Использование функции для разных пар элементов
// toggleContentVisibility('#task-header0', '#task-more-material');

// toggleContentVisibility('#task-header1', '#taskContent1');
// toggleContentVisibility('#task-header2', '#taskContent2');

// toggleContentVisibility('#task-header-alfabet', '#task-content-alfabet');
// toggleContentVisibility('#task-header-law1', '#task-content-law1-img');
// toggleContentVisibility('#task-header-law2', '#task-content-law2-img');
// toggleContentVisibility('#task-header-law3', '#task-content-law3-img');

toggleContentVisibility('#task-header-trainer', '#task-content-trainer');

// для второго урока
// toggleContentVisibility('#task-header2-3', '#taskContent2-3');
// toggleContentVisibility('#task-header2-4', '#taskContent2-4');




//функция которая определяет правильных ответ
   

document.querySelectorAll('.answer-select').forEach(select => {
    select.addEventListener('change', function() {
        const correctAnswer = this.getAttribute('data-correct');
        if (this.value === correctAnswer) {
            this.classList.remove('incorrect');
            this.classList.add('correct');
        } else {
            this.classList.remove('correct');
            this.classList.add('incorrect');
        }
    });
});




///////////////// для словарного тренажера
// const wordsSet1 = [
//     {
//         word: "akraba",
//         translation: "родственники",
//         image: "./foto/trainer/akraba.jpg"
//     },
//     {
//         word: "anahtar",
//         translation: "ключ",
//         image: "./foto/trainer/anahtar.jpg"
//     },
//     {
//         word: "araba",
//         translation: "машина",
//         image: "./foto/trainer/araba.jpg"
//     },
//     {
//         word: "bavul",
//         translation: "чемодан",
//         image: "./foto/trainer/bavul.jpg"
//     },
//     {
//         word: "bebek",
//         translation: "малыш",
//         image: "./foto/trainer/bebek.jpg"
//     },
//     {
//         word: "büyük",
//         translation: "большой",
//         image: "./foto/trainer/büyük.jpg"
//     },
//     {
//         word: "ceket",
//         translation: "пиджак",
//         image: "./foto/trainer/ceket.jpg"
//     },
//     {
//         word: "çanta",
//         translation: "сумка",
//         image: "./foto/trainer/çanta.jpg"
//     },
//     {
//         word: "çatal",
//         translation: "вилка",
//         image: "./foto/trainer/çatal.jpeg"
//     },
//     {
//         word: "çay",
//         translation: "чай",
//         image: "./foto/trainer/çay.jpg"
//     },
//     {
//         word: "çaydanlık",
//         translation: "чайник",
//         image: "./foto/trainer/çaydanlık.jpg"
//     },
//     {
//         word: "deniz",
//         translation: "море",
//         image: "./foto/trainer/deniz.jpg"
//     },
//     {
//         word: "dondurma",
//         translation: "мороженое",
//         image: "./foto/trainer/dondurma.jpg"
//     },
//     {
//         word: "elbise",
//         translation: "одежда платье",
//         image: "./foto/trainer/elbise.jpg"
//     },
//     {
//         word: "elma",
//         translation: "яблоко",
//         image: "./foto/trainer/elma.jpg"
//     },
//     {
//         word: "fındık",
//         translation: "фундук",
//         image: "./foto/trainer/fındık.jpg"
//     },
//     {
//         word: "fırça",
//         translation: "щетка",
//         image: "./foto/trainer/fırça.jpg"
//     },
//     {
//         word: "fıstık",
//         translation: "фисташки",
//         image: "./foto/trainer/fıstık.jpg"
//     },
//     {
//         word: "gömlek",
//         translation: "рубашка",
//         image: "./foto/trainer/gömlek.jpg"
//     },
//     {
//         word: "göz",
//         translation: "глаз",
//         image: "./foto/trainer/göz.jpg"
//     },
//     {
//         word: "gözlük",
//         translation: "очки",
//         image: "./foto/trainer/gözlük.jpg"
//     },
//     {
//         word: "hamam",
//         translation: "хамам",
//         image: "./foto/trainer/hamam.jpg"
//     },
//     {
//         word: "havuç",
//         translation: "морковь",
//         image: "./foto/trainer/havuç.jpg"
//     },
//     {
//         word: "iğne",
//         translation: "иголка",
//         image: "./foto/trainer/iğne.jpg"
//     },
//     {
//         word: "inek",
//         translation: "корова",
//         image: "./foto/trainer/inek.jpg"
//     },
//     {
//         word: "koltuk",
//         translation: "кресло",
//         image: "./foto/trainer/koltuk.jpg"
//     },
//     {
//         word: "köpek",
//         translation: "собака",
//         image: "./foto/trainer/köpek.jpg"
//     },
//     {
//         word: "lamba",
//         translation: "лампа",
//         image: "./foto/trainer/lamba.jpg"
//     },
//     {
//         word: "ldiven",
//         translation: "перчатки",
//         image: "./foto/trainer/ldiven.jpg"
//     },
//     {
//         word: "limon",
//         translation: "лимон",
//         image: "./foto/trainer/limon.jpg"
//     },
//     {
//         word: "merdiven",
//         translation: "лесница",
//         image: "./foto/trainer/merdiven.jpg"
//     },
//     {
//         word: "musluk",
//         translation: "кран",
//         image: "./foto/trainer/musluk.jpg"
//     },
//     {
//         word: "nar",
//         translation: "гранат",
//         image: "./foto/trainer/nar.jpg"
//     },
//     {
//         word: "orman",
//         translation: "лес",
//         image: "./foto/trainer/orman.jpg"
//     },
//     {
//         word: "otobüs",
//         translation: "автобус",
//         image: "./foto/trainer/otobüs.jpg"
//     },
//     {
//         word: "öğretmen",
//         translation: "учитель",
//         image: "./foto/trainer/öğretmen.jpg"
//     },
//     {
//         word: "ördek",
//         translation: "утка",
//         image: "./foto/trainer/ördek.jpg"
//     },
//     {
//         word: "örnek",
//         translation: "пример",
//         image: "./foto/trainer/örnek.jpg"
//     },
//     {
//         word: "para",
//         translation: "деньги",
//         image: "./foto/trainer/para.jpg"
//     },
//     {
//         word: "portakal",
//         translation: "апельсин",
//         image: "./foto/trainer/portakal.jpg"
//     },
//     {
//         word: "radyo",
//         translation: "радио",
//         image: "./foto/trainer/radyo.jpg"
//     },
//     {
//         word: "saat",
//         translation: "часы",
//         image: "./foto/trainer/saat.jpg"
//     },
//     {
//         word: "şemsiye",
//         translation: "зонт",
//         image: "./foto/trainer/şemsiye.jpg"
//     },
//     {
//         word: "şişe",
//         translation: "бутылка",
//         image: "./foto/trainer/şişe.jpg"
//     },
//     {
//         word: "tabak",
//         translation: "тарелка",
//         image: "./foto/trainer/tabak.jpg"
//     },
//     {
//         word: "tavuk",
//         translation: "курица",
//         image: "./foto/trainer/tavuk.jpg"
//     },
//     {
//         word: "terlik",
//         translation: "тапочки",
//         image: "./foto/trainer/terlik.jpg"
//     },
//     {
//         word: "uçak",
//         translation: "самолет",
//         image: "./foto/trainer/uçak.jpg"
//     },
//     {
//         word: "ütü",
//         translation: "утюг",
//         image: "./foto/trainer/ütü.jpg"
//     },
//     {
//         word: "üzgün",
//         translation: "грустный",
//         image: "./foto/trainer/üzgün.jpg"
//     },
//     {
//         word: "üzüm",
//         translation: "виноград",
//         image: "./foto/trainer/üzüm.jpg"
//     },
//     {
//         word: "vagon",
//         translation: "вагон",
//         image: "./foto/trainer/vagon.jpg"
//     },
//     {
//         word: "yüzük",
//         translation: "кольцо",
//         image: "./foto/trainer/yüzük.jpg"
//     },
//     {
//         word: "yıldız",
//         translation: "звезда",
//         image: "./foto/trainer/yıldız.jpg"
//     },
//     {
//         word: "zeytin",
//         translation: "оливки",
//         image: "./foto/trainer/zeytin.jpg"
//     },{
//         word: "zürafa",
//         translation: "жираф",
//         image: "./foto/trainer/zürafa.jpg"
//     }
// ];

// const wordsSet2 = [
//     {
//         word: "ad",
//         translation: "имя",
//         image: "./foto/ad.jpg"
//     },
//     {
//         word: "bekar",
//         translation: "холостой",
//         image: "./foto/bekar.jpg"
//     },
//     {
//         word: "benim adım Burak",
//         translation: "меня зовут Бурак",
//         image: "./foto/benim adım Burak.jpg"
//     },
//     {
//         word: "doktor",
//         translation: "доктор",
//         image: "./foto/doktor.jpg"
//     },
//     {
//         word: "merhaba",
//         translation: "здравствуйте",
//         image: "./foto/merhaba.jpg"
//     },
//     {
//         word: "günaydın",
//         translation: "доброе утро",
//         image: "./foto/günaydın.jpg"
//     },
//     {
//         word: "nasılsın?",
//         translation: "как ты? (как дела?)",
//         image: "./foto/nasılsın?.jpg"
//     },
//     {
//         word: "iyiyim",
//         translation: "у меня все хорошо",
//         image: "./foto/iyiyim.jpg"
//     },
//     {
//         word: "nerelisin?",
//         translation: "откуда ты?",
//         image: "./foto/nerelisin?.jpeg"
//     },
//     {
//         word: "hoşça kal",
//         translation: "до свидания",
//         image: "./foto/hoşça kal.jpg"
//     },
//     {
//         word: "güle güle",
//         translation: "до свидания (уходящему)",
//         image: "./foto/güle güle.jpg"
//     },
//     {
//         word: "memnun oldum",
//         translation: "очень приятно",
//         image: "./foto/memnun oldum.jpg"
//     },
//     {
//         word: "teşekkür ederim",
//         translation: "спасибо",
//         image: "./foto/teşekkür ederim.jpg"
//     },
//     {
//         word: "evli",
//         translation: "женат, замужем",
//         image: "./foto/evli.jpg"
//     },
//     {
//         word: "kaç yaşındasın?",
//         translation: "сколько тебе лет?",
//         image: "./foto/kaç yaşındasın?.jpg"
//     },
//     {
//         word: "otuz yaşındayım",
//         translation: "мне тридцать лет",
//         image: "./foto/otuz yaşındayım.jpg"
//     },
//     {
//         word: "senin adın ne?",
//         translation: "как тебя зовут?",
//         image: "./foto/senin adın ne?.jpg"
//     },
//     {
//         word: "selam",
//         translation: "привет",
//         image: "./foto/trainer/selam.jpg"
//     },
//     {
//         word: "iyi günler",
//         translation: "добрый день",
//         image: "./foto/iyi günler.jpg"
//     },
//     {
//         word: "iyi akşamlar",
//         translation: "добрый вечер",
//         image: "./foto/iyi akşamlar.jpg"
//     },
//     {
//         word: "iyi geceler",
//         translation: "спокойной ночи",
//         image: "./foto/iyi geceler.jpg"
//     }
    
// ];

//////////////////old tainer///////////////
// let currentIndex = 0;

// function updateCard() {
//     const card = document.getElementById('card');
//     const wordElement = card.querySelector('.word');
//     const translationElement = card.querySelector('.translation');
//     const imageElement = card.querySelector('.image img');

//     wordElement.textContent = words[currentIndex].word;
//     translationElement.textContent = words[currentIndex].translation;
//     imageElement.src = words[currentIndex].image;

//     // Скрыть перевод и картинку
//     translationElement.classList.add('hidden');
//     imageElement.parentElement.classList.add('hidden');
// }

// function flipCard() {
//     const card = document.getElementById('card');
//     const translationElement = card.querySelector('.translation');
//     const imageElement = card.querySelector('.image');

//     translationElement.classList.toggle('hidden');
//     imageElement.classList.toggle('hidden');
// }

// function prevWord() {
//     currentIndex = (currentIndex === 0) ? words.length - 1 : currentIndex - 1;
//     updateCard();
// }

// function nextWord() {
//     currentIndex = (currentIndex === words.length - 1) ? 0 : currentIndex + 1;
//     updateCard();
// }

// // Инициализация первой карточки
// updateCard();
''
/////////словарного тренажера///////new/////////////////


let words = [];
let currentIndex = 0;

function setWords(newWords) {
    words = newWords;
    currentIndex = 0;
    updateCard();
}

function updateCard() {
    if (words.length === 0) return;

    const card = document.getElementById('card');
    const wordElement = card.querySelector('.word');
    const translationElement = card.querySelector('.translation');
    const imageElement = card.querySelector('.image img');

    wordElement.textContent = words[currentIndex].word;
    translationElement.textContent = words[currentIndex].translation;
    imageElement.src = words[currentIndex].image;

    // Скрыть перевод и картинку
    translationElement.classList.add('hidden');
    imageElement.parentElement.classList.add('hidden');
}

function flipCard() {
    const card = document.getElementById('card');
    const translationElement = card.querySelector('.translation');
    const imageElement = card.querySelector('.image');

    translationElement.classList.toggle('hidden');
    imageElement.classList.toggle('hidden');
}

function prevWord() {
    if (words.length === 0) return;
    currentIndex = (currentIndex === 0) ? words.length - 1 : currentIndex - 1;
    updateCard();
}

function nextWord() {
    if (words.length === 0) return;
    currentIndex = (currentIndex === words.length - 1) ? 0 : currentIndex + 1;
    updateCard();
}

// Загрузка соответствующего набора слов при загрузке страницы
window.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.task-content-trainer');
    const setName = container.getAttribute('data-set');
    if (setName && wordsSets[setName]) {
        setWords(wordsSets[setName]);
    }
});