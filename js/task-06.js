'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное
// количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное -
// красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validInput = document.querySelector('#validation-input');
const inputLength = validInput.dataset.length;

validInput.addEventListener('change', currentVal => {
  const currentValEl = currentVal.target.value;

  if (currentValEl.length === +inputLength) {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  } else {
    validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  }
});
