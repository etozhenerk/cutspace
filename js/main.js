'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

const toggleActive = () => {
  form.classList.toggle('form--active');
};

input.addEventListener('focus', toggleActive);
input.addEventListener('blur', toggleActive);