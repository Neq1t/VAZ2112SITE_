document.addEventListener('DOMContentLoaded', function() {
  // Валидация формы (если она есть на странице)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      if (!nameInput.value.trim()) {
        alert('Пожалуйста, введите ваше имя.');
        nameInput.focus();
        isValid = false;
      } else if (!emailInput.value.trim()) {
        alert('Пожалуйста, введите ваш email.');
        emailInput.focus();
        isValid = false;
      } else if (!messageInput.value.trim()) {
        alert('Пожалуйста, введите ваше сообщение.');
        messageInput.focus();
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault(); // Предотвращаем отправку формы
      } else {
        alert('Сообщение отправлено (только для демонстрации)!');
        form.reset();
        event.preventDefault(); // Предотвратить отправку формы, т.к. нет реального бэкенда
      }
    });
  }

    // Плавная прокрутка (если нужно)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация появления элементов
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 100 * index); // Задержка увеличивается для каждого элемента
    });
});