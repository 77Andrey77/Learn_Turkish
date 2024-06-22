

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

// для второй страници первого урока
// toggleContentVisibility('#task-header-plural', '#task-content-plural');




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
        image: "./foto/trainer/akraba.jpg"
    },
    {
        word: "anahtar",
        translation: "ключ",
        image: "./foto/trainer/anahtar.jpg"
    },
    {
        word: "araba",
        translation: "машина",
        image: "./foto/trainer/araba.jpg"
    },
    {
        word: "bavul",
        translation: "чемодан",
        image: "./foto/trainer/bavul.jpg"
    },
    {
        word: "bebek",
        translation: "малыш",
        image: "./foto/trainer/bebek.jpg"
    },
    {
        word: "büyük",
        translation: "большой",
        image: "./foto/trainer/büyük.jpg"
    },
    {
        word: "ceket",
        translation: "пиджак",
        image: "./foto/trainer/ceket.jpg"
    },
    {
        word: "çanta",
        translation: "сумка",
        image: "./foto/trainer/çanta.jpg"
    },
    {
        word: "çatal",
        translation: "вилка",
        image: "./foto/trainer/çatal.jpeg"
    },
    {
        word: "çay",
        translation: "чай",
        image: "./foto/trainer/çay.jpg"
    },
    {
        word: "çaydanlık",
        translation: "чайник",
        image: "./foto/trainer/çaydanlık.jpg"
    },
    {
        word: "deniz",
        translation: "море",
        image: "./foto/trainer/deniz.jpg"
    },
    {
        word: "dondurma",
        translation: "мороженое",
        image: "./foto/trainer/dondurma.jpg"
    },
    {
        word: "elbise",
        translation: "одежда платье",
        image: "./foto/trainer/elbise.jpg"
    },
    {
        word: "elma",
        translation: "яблоко",
        image: "./foto/trainer/elma.jpg"
    },
    {
        word: "fındık",
        translation: "фундук",
        image: "./foto/trainer/fındık.jpg"
    },
    {
        word: "fırça",
        translation: "щетка",
        image: "./foto/trainer/fırça.jpg"
    },
    {
        word: "fıstık",
        translation: "фисташки",
        image: "./foto/trainer/fıstık.jpg"
    },
    {
        word: "gömlek",
        translation: "рубашка",
        image: "./foto/trainer/gömlek.jpg"
    },
    {
        word: "göz",
        translation: "глаз",
        image: "./foto/trainer/göz.jpg"
    },
    {
        word: "gözlük",
        translation: "очки",
        image: "./foto/trainer/gözlük.jpg"
    },
    {
        word: "hamam",
        translation: "хамам",
        image: "./foto/trainer/hamam.jpg"
    },
    {
        word: "havuç",
        translation: "морковь",
        image: "./foto/trainer/havuç.jpg"
    },
    {
        word: "iğne",
        translation: "иголка",
        image: "./foto/trainer/iğne.jpg"
    },
    {
        word: "inek",
        translation: "корова",
        image: "./foto/trainer/inek.jpg"
    },
    {
        word: "koltuk",
        translation: "кресло",
        image: "./foto/trainer/koltuk.jpg"
    },
    {
        word: "köpek",
        translation: "собака",
        image: "./foto/trainer/köpek.jpg"
    },
    {
        word: "lamba",
        translation: "лампа",
        image: "./foto/trainer/lamba.jpg"
    },
    {
        word: "ldiven",
        translation: "перчатки",
        image: "./foto/trainer/ldiven.jpg"
    },
    {
        word: "limon",
        translation: "лимон",
        image: "./foto/trainer/limon.jpg"
    },
    {
        word: "merdiven",
        translation: "лесница",
        image: "./foto/trainer/merdiven.jpg"
    },
    {
        word: "musluk",
        translation: "кран",
        image: "./foto/trainer/musluk.jpg"
    },
    {
        word: "nar",
        translation: "гранат",
        image: "./foto/trainer/nar.jpg"
    },
    {
        word: "orman",
        translation: "лес",
        image: "./foto/trainer/orman.jpg"
    },
    {
        word: "otobüs",
        translation: "автобус",
        image: "./foto/trainer/otobüs.jpg"
    },
    {
        word: "öğretmen",
        translation: "учитель",
        image: "./foto/trainer/öğretmen.jpg"
    },
    {
        word: "ördek",
        translation: "утка",
        image: "./foto/trainer/ördek.jpg"
    },
    {
        word: "örnek",
        translation: "пример",
        image: "./foto/trainer/örnek.jpg"
    },
    {
        word: "para",
        translation: "деньги",
        image: "./foto/trainer/para.jpg"
    },
    {
        word: "portakal",
        translation: "апельсин",
        image: "./foto/trainer/portakal.jpg"
    },
    {
        word: "radyo",
        translation: "радио",
        image: "./foto/trainer/radyo.jpg"
    },
    {
        word: "saat",
        translation: "часы",
        image: "./foto/trainer/saat.jpg"
    },
    {
        word: "şemsiye",
        translation: "зонт",
        image: "./foto/trainer/şemsiye.jpg"
    },
    {
        word: "şişe",
        translation: "бутылка",
        image: "./foto/trainer/şişe.jpg"
    },
    {
        word: "tabak",
        translation: "тарелка",
        image: "./foto/trainer/tabak.jpg"
    },
    {
        word: "tavuk",
        translation: "курица",
        image: "./foto/trainer/tavuk.jpg"
    },
    {
        word: "terlik",
        translation: "тапочки",
        image: "./foto/trainer/terlik.jpg"
    },
    {
        word: "uçak",
        translation: "самолет",
        image: "./foto/trainer/uçak.jpg"
    },
    {
        word: "ütü",
        translation: "утюг",
        image: "./foto/trainer/ütü.jpg"
    },
    {
        word: "üzgün",
        translation: "грустный",
        image: "./foto/trainer/üzgün.jpg"
    },
    {
        word: "üzüm",
        translation: "виноград",
        image: "./foto/trainer/üzüm.jpg"
    },
    {
        word: "vagon",
        translation: "вагон",
        image: "./foto/trainer/vagon.jpg"
    },
    {
        word: "yüzük",
        translation: "кольцо",
        image: "./foto/trainer/yüzük.jpg"
    },
    {
        word: "yıldız",
        translation: "звезда",
        image: "./foto/trainer/yıldız.jpg"
    },
    {
        word: "zeytin",
        translation: "оливки",
        image: "./foto/trainer/zeytin.jpg"
    },{
        word: "zürafa",
        translation: "жираф",
        image: "./foto/trainer/zürafa.jpg"
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
