const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const lPoppup = document.querySelector('.l');
const iconclose = document.querySelector('.icon-close');


registerLink.addEventListener('click', (e) => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
  wrapper.classList.remove('active');
});

lPoppup.addEventListener('click', (e) => {
  wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', (e) => {
  wrapper.classList.remove('active-popup');
});