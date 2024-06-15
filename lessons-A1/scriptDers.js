

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
toggleContentVisibility('#task-header0', '#task-more-material');
toggleContentVisibility('#task-header1', '#taskContent1');
toggleContentVisibility('#task-header2', '#taskContent2');

toggleContentVisibility('#task-header-alfabet', '#task-content-alfabet');
toggleContentVisibility('#task-header-law1', '#task-content-law1-img');
toggleContentVisibility('#task-header-law2', '#task-content-law2-img');
toggleContentVisibility('#task-header-law3', '#task-content-law3-img');

toggleContentVisibility('#task-header-trainer', '#task-content-trainer');



// function toggleTaskContentHidden() {
//     if (contentEl.classList.contains("task-hidden")) {
//         contentEl.classList.remove("task-hidden");
//     } else {
//         contentEl.classList.add("task-hidden");
//          }
//      }

// function toggleTaskContentHidden() {
//     contentEl.classList.toggle('task-hidden');
// }




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


//// для слайдера алфавита
let slideIndex = 0;
showSlides(slideIndex);

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

///////////////// для словарного тренажера
const words = [
    {
        word: "akraba",
        translation: "родственники",
        image: "./foto/trainer/akraba-родственники.jpg"
    },
    {
        word: "anahtar",
        translation: "ключ",
        image: "./foto/trainer/anahtar- ключ.jpg"
    },
    {
        word: "araba",
        translation: "машина",
        image: "./foto/trainer/araba-машина.jpg"
    },
    {
        word: "bavul",
        translation: "чемодан",
        image: "./foto/trainer/bavul- чемодан.jpg"
    },
    {
        word: "bebek",
        translation: "малыш",
        image: "./foto/trainer/bebek-малыш.jpg"
    },
    {
        word: "büyük",
        translation: "большой",
        image: "./foto/trainer/büyük-большой.jpg"
    },
    {
        word: "ceket",
        translation: "пиджак",
        image: "./foto/trainer/ceket-пиджак.jpg"
    },
    {
        word: "çanta",
        translation: "сумка",
        image: "./foto/trainer/çanta-сумка.jpg"
    },
    {
        word: "çatal",
        translation: "вилка",
        image: "./foto/trainer/çatal-вилка.jpeg"
    },
    {
        word: "çay",
        translation: "чай",
        image: "./foto/trainer/çay-чай.jpg"
    },
    {
        word: "çaydanlık",
        translation: "чайник",
        image: "./foto/trainer/çaydanlık-чайник.jpg"
    },
    {
        word: "deniz",
        translation: "море",
        image: "./foto/trainer/deniz-море.jpg"
    },
    {
        word: "dondurma",
        translation: "мороженое",
        image: "./foto/trainer/dondurma-мороженое.jpg"
    },
    {
        word: "elbise",
        translation: "одежда платье",
        image: "./foto/trainer/elbise-одежда платье.jpg"
    },
    {
        word: "elma",
        translation: "яблоко",
        image: "./foto/trainer/elma-яблоко.jpg"
    },
    {
        word: "fındık",
        translation: "фундук",
        image: "./foto/trainer/fındık-фундук.jpg"
    },
    {
        word: "fırça",
        translation: "щетка",
        image: "./foto/trainer/fırça-щетка.jpg"
    },
    {
        word: "fıstık",
        translation: "фисташки",
        image: "./foto/trainer/fıstık-фисташки.jpg"
    },
    {
        word: "gömlek",
        translation: "рубашка",
        image: "./foto/trainer/gömlek-рубашка.jpg"
    },
    {
        word: "göz",
        translation: "глаз",
        image: "./foto/trainer/göz-глаз.jpg"
    },
    {
        word: "gözlük",
        translation: "очки",
        image: "./foto/trainer/gözlük-очки.jpg"
    },
    {
        word: "hamam",
        translation: "хамам",
        image: "./foto/trainer/hamam-хамам.jpg"
    },
    {
        word: "havuç",
        translation: "морковь",
        image: "./foto/trainer/havuç-морковь.jpg"
    },
    {
        word: "iğne",
        translation: "иголка",
        image: "./foto/trainer/iğne-иголка.jpg"
    },
    {
        word: "inek",
        translation: "корова",
        image: "./foto/trainer/inek-корова.jpg"
    },
    {
        word: "koltuk",
        translation: "кресло",
        image: "./foto/trainer/koltuk-кресло.jpg"
    },
    {
        word: "köpek",
        translation: "собака",
        image: "./foto/trainer/köpek-собака.jpg"
    },
    {
        word: "lamba",
        translation: "лампа",
        image: "./foto/trainer/lamba-лампа.jpg"
    },
    {
        word: "ldiven",
        translation: "перчатки",
        image: "./foto/trainer/ldiven-перчатки.jpg"
    },
    {
        word: "limon",
        translation: "лимон",
        image: "./foto/trainer/limon-лимон.jpg"
    },
    {
        word: "merdiven",
        translation: "лесница",
        image: "./foto/trainer/merdiven-лесница.jpg"
    },
    {
        word: "musluk",
        translation: "кран",
        image: "./foto/trainer/musluk-кран.jpg"
    },
    {
        word: "nar",
        translation: "гранат",
        image: "./foto/trainer/nar-гранат.jpg"
    },
    {
        word: "orman",
        translation: "лес",
        image: "./foto/trainer/orman-лес.jpg"
    },
    {
        word: "otobüs",
        translation: "автобус",
        image: "./foto/trainer/otobüs-автобус.jpg"
    },
    {
        word: "öğretmen",
        translation: "учитель",
        image: "./foto/trainer/öğretmen-учитель.jpg"
    },
    {
        word: "ördek",
        translation: "утка",
        image: "./foto/trainer/ördek-утка.jpg"
    },
    {
        word: "örnek",
        translation: "пример",
        image: "./foto/trainer/örnek-пример.jpg"
    },
    {
        word: "para",
        translation: "деньги",
        image: "./foto/trainer/para-деньги.jpg"
    },
    {
        word: "portakal",
        translation: "апельсин",
        image: "./foto/trainer/portakal-апельсин.jpg"
    },
    {
        word: "radyo",
        translation: "радио",
        image: "./foto/trainer/radyo-радио.jpg"
    },
    {
        word: "saat",
        translation: "часы",
        image: "./foto/trainer/saat-часы.jpg"
    },
    {
        word: "şemsiye",
        translation: "зонт",
        image: "./foto/trainer/şemsiye-зонт.jpg"
    },
    {
        word: "şişe",
        translation: "бутылка",
        image: "./foto/trainer/şişe-бутылка.jpg"
    },
    {
        word: "tabak",
        translation: "тарелка",
        image: "./foto/trainer/tabak-тарелка.jpg"
    },
    {
        word: "tavuk",
        translation: "курица",
        image: "./foto/trainer/tavuk-курица.jpg"
    },
    {
        word: "terlik",
        translation: "тапочки",
        image: "./foto/trainer/terlik-тапочки.jpg"
    },
    {
        word: "uçak",
        translation: "самолет",
        image: "./foto/trainer/uçak-самолет.jpg"
    },
    {
        word: "ütü",
        translation: "утюг",
        image: "./foto/trainer/ütü-утюг.jpg"
    },
    {
        word: "üzgün",
        translation: "грустный",
        image: "./foto/trainer/üzgün-грустный.jpg"
    },
    {
        word: "üzüm",
        translation: "виноград",
        image: "./foto/trainer/üzüm-виноград.jpg"
    },
    {
        word: "vagon",
        translation: "вагон",
        image: "./foto/trainer/vagon-вагон.jpg"
    },
    {
        word: "yüzük",
        translation: "кольцо",
        image: "./foto/trainer/yüzük-кольцо.jpg"
    },
    {
        word: "yıldız",
        translation: "звезда",
        image: "./foto/trainer/yıldız-звезда.jpg"
    },
    {
        word: "zeytin",
        translation: "оливки",
        image: "./foto/trainer/zeytin-оливки.jpg"
    },{
        word: "zürafa",
        translation: "жираф",
        image: "./foto/trainer/zürafa-жираф.jpg"
    }
];

let currentIndex = 0;

function updateCard() {
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
    currentIndex = (currentIndex === 0) ? words.length - 1 : currentIndex - 1;
    updateCard();
}

function nextWord() {
    currentIndex = (currentIndex === words.length - 1) ? 0 : currentIndex + 1;
    updateCard();
}

// Инициализация первой карточки
updateCard();
