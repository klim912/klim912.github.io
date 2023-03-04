// знаходимо кнопку зміни теми за її класом
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});




