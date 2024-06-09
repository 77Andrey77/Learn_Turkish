// нужно поатавить слушателя событий на заголовки секций после чего будет срабатывать раскрытие
// сделать отдельную функцию которая будет открывать скрытый список вопросов

function toggleTaskContent1() {
    const content = document.getElementById('taskContent1');
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTaskContent2() {
    const content = document.getElementById('taskContent2');
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
}

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