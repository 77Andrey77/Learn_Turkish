//первое использование ders7, ders13

// Универсальная функция для переключения видимости
function toggleSliderVisibility(contentSelector) {
    console.log(`Trying to toggle visibility for selector: ${contentSelector}`);
    
    if (contentSelector && contentSelector.startsWith('#')) {
        const contentEl = document.querySelector(contentSelector);
        if (contentEl) {
            console.log(`Element found: ${contentEl}`);
            contentEl.classList.toggle('hidden');
            console.log(`Toggled class 'hidden' for ${contentSelector}`);
        } else {
            console.error(`Element with selector ${contentSelector} not found`);
        }
    } else {
        console.error(`Invalid content selector: ${contentSelector}`);
    }
}

// Обработчик события для кнопок
document.querySelectorAll('.task-section button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id) { // Проверка существования идентификатора
            const contentId = `#${button.id.replace('-header', '-content')}`;
            console.log(`Button ID: ${button.id}`);
            console.log(`Generated content ID: ${contentId}`);
            
            // Проверка, что contentId корректен
            if (contentId !== '#' && document.querySelector(contentId)) {
                toggleSliderVisibility(contentId);
            } else {
                console.error(`Invalid or missing content ID: ${contentId}`);
            }
        } else {
            console.error(`Button with missing ID clicked`);
        }
    });
});

// Объект для хранения текущих индексов слайдов для каждого слайдера
const slideIndices = {};

// Функция для показа слайдов для конкретного слайдера
function showSlides(sliderId, n) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    console.log(`Showing slides for ${sliderId}`);
    if (slides.length === 0) {
        console.error(`No slides found for slider ID: ${sliderId}`);
        return;
    }
    if (!slideIndices[sliderId]) {
        slideIndices[sliderId] = 0;
    }
    slideIndices[sliderId] = (slideIndices[sliderId] + n + slides.length) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndices[sliderId] ? 'flex' : 'none';
    });
}

// Функция для перемещения слайдов
function moveSlides(n, sliderId) {
    console.log(`Moving slides for ${sliderId} by ${n}`);
    showSlides(sliderId, n);
}

// Инициализация начального состояния для всех слайдеров
document.addEventListener('DOMContentLoaded', () => {
    showSlides('infinitive-slides', 0);
    showSlides('present-slides', 0);
    showSlides('negative-present-slides', 0);
    showSlides('negative-present-slides', 0);

});
