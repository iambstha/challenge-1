const heading = document.querySelector('.heading');
const button = document.querySelector('.button');

setTimeout(() => {
    heading.style.transform = `translateY(0px)`;
    heading.style.transition = ' 1s linear'
}, 100);

setTimeout(() => {
    button.style.transform = `translateY(0px)`;
    button.style.transition = ' 1s linear'
}, 800);
