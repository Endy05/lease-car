const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
    element.addEventListener('click', function(evt) {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        // Знімаємо активний клас з кнопок
        tabItem.forEach(item => item.classList.remove('tabs__btn-item--active'));
        tabTarget.classList.add('tabs__btn-item--active');

        // Приховуємо всі контент-блоки, крім потрібного
        tabContent.forEach(item => item.classList.remove('tabs__content-item--active'));
        const activeContent = document.querySelector(`#${button}`);
        if (activeContent) {
            activeContent.classList.add('tabs__content-item--active');
        }
    });
});

const swiper = new Swiper(".swiper", {
    effect: "fade", // Додає безкінечне повторення слайдів
    pagination: {
        el: ".swiper-pagination",// Дозволяє кліки для переходу між слайдами
    },
    autoplay: {
        delay: 3000,  // Автоматично переключає слайди кожні 3 секунди
        disableOnInteraction: false, 
    },
});