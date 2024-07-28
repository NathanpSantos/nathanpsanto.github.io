// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let index = 0;

        prevButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
                images.style.transform = `translateX(${-index * 100}%)`;
            }
        });

        nextButton.addEventListener('click', () => {
            if (index < images.children.length - 1) {
                index++;
                images.style.transform = `translateX(${-index * 100}%)`;
            }
        });
    });
});
