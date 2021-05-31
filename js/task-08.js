'use strict';

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку
// Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция
// создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const renderEl = document.querySelector('#controls [data-action="render"]');
const destroyEl = document.querySelector('#controls [data-action="destroy"]');
const boxes = document.getElementById('boxes');
const inputValue = document.querySelector('input');

let amount = '';
inputValue.addEventListener('change', elem => {
  elem.target.value;
});

function createBoxes(amount) {
  removeCreate();
  amount = inputValue.value;
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    boxes.appendChild(div);
    inputValue.value = '';
  }
}

function random() {
  return Math.floor(Math.random() * 256);
}

const removeCreate = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
};

renderEl.addEventListener('click', () => {
  createBoxes(amount);
});

destroyEl.addEventListener('click', removeCreate);
