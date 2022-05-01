const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
});
 
const form = document.querySelector('.contact-form form');

const activeEl = (e) => {
  e.target.nextElementSibling.classList.add('_active');
};

const deactivatedEl = (e) => {
  if (e.target.value == '') {
    e.target.nextElementSibling.classList.remove('_active');
  }
};

[...form].forEach(el => {
  el.addEventListener('focus' , activeEl);
});

[...form].forEach(el => {
  el.addEventListener('blur' , deactivatedEl);
});



