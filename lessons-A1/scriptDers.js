

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