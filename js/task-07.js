'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputSliderEl = document.querySelector('#font-size-control');
const inputTextEl = document.querySelector('#text');

const changeTextValue = () => {
  inputTextEl.style.fontSize = `${inputSliderEl.value}px`;
};

inputSliderEl.addEventListener('input', changeTextValue);
