function toggleTaskContent() {
    const content = document.getElementById('taskContent');
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