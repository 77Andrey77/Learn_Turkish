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

toggleContentVisibility('#task-header-alfabet', '#task-content-alfabet');
toggleContentVisibility('#task-header-law1', '#task-content-law1-img');
toggleContentVisibility('#task-header-law2', '#task-content-law2-img');
toggleContentVisibility('#task-header-law3', '#task-content-law3-img');