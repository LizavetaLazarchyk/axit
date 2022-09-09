'use strict'
window.addEventListener('DOMContentLoaded', () => {

// slider

const cliderItems = document.querySelectorAll('.slider__img__wrap'),
    slider = document.querySelector('.slider__content'),
    arrowPrev = document.querySelector('.slider__arrow-prev'),
    arrowNext = document.querySelector('.slider__arrow-next'),
    slideFieldWrap = document.querySelector('.slider__inner__wrap'),
    slideField = document.querySelector('.slider__inner'),
    slidesWidth = window.getComputedStyle(slideFieldWrap).width;
let index = 0;

// Создание кружочков-индикаторов
const indicators = document.createElement('ol');
const dots = [];
indicators.classList.add('carousel-indicators');
indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: -40px;
    left: 0;
    display: flex;
    justify-content: center;
    margin: 0 15%;
    list-style: none;
    column-gap: 30px;
`;
slider.append(indicators);

for ( let i = 0; i < cliderItems.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
    width: 15px;
    height: 15px;
    cursor: pointer;
    background-color: #EC7979;
    border-radius: 50px;
    `;

    if ( i == 0) {
        dot.style.backgroundColor = '#AB4949';
    }
    indicators.append(dot);
    dots.push(dot);
}

slideField.style.width = 100 * cliderItems.length + '%';
cliderItems.forEach( item => {
    item.style.width = 100 + '%';
});
slideFieldWrap.style.overflow = 'hidden';
let offset = 0;

console.log(slidesWidth);

arrowNext.addEventListener('click', () => {
    if (offset == +slidesWidth.slice(0, -2) * (cliderItems.length - 1)){
        offset = 0;
        index = 0;
    } else {
        offset += +slidesWidth.slice(0, -2);
        index++
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    dots.forEach( dot => dot.style.backgroundColor = '#EC7979');
    dots[index].style.backgroundColor = '#AB4949'; 
    
});

arrowPrev.addEventListener('click', () => {
    if (offset == 0){
        offset = +slidesWidth.slice(0, -2) * (cliderItems.length - 1);
        index = cliderItems.length;
    } else {
        offset -= +slidesWidth.slice(0, -2);
        index--
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    dots.forEach( dot => dot.style.backgroundColor = '#EC7979');
    dots[index].style.backgroundColor = '#AB4949'; 
});

dots.forEach( dot => {
    dot.addEventListener('click', (e) => {
        const clideTo = e.target.getAttribute('data-slide-to');

        index = clideTo;
        offset = +slidesWidth.slice(0, -2) * (clideTo - 1);
        slideField.style.transform = `translateX(-${offset}px)`;

        
        dots.forEach( dot => dot.style.backgroundColor = '#EC7979');
        dots[index - 1].style.backgroundColor = '#AB4949'; 
    });
});


// 2й способ
// showSlides(index);

// function showSlides(n) {
//     if (n > cliderItems.length ){
//         index = 1;
//     }

//     if( n < 1){
//         index = cliderItems.length;
//     }

//     cliderItems.forEach( item => {
//         item.classList.add('hidden');
//     });

//     cliderItems[index -1].classList.add('open');
// }

// function changeIndex(n){
//     showSlides(index += n);
// }

// arrowPrev.addEventListener('click', () =>{
//     changeIndex(-1);
// });

// arrowNext.addEventListener('click', () => {
//     changeIndex(1);
// });


});
