'use strict';

// scss
require('../scss/index.scss');

console.log('this is javascript')

function render() {
  let src = 'https://placekitten.com/1000/700'

  let i = 20;

  while (i--) {
    let showcase = document.getElementById('showcase')

    let figure = document.createElement('figure')
    let img = document.createElement('img')
    img.src = src;
    img.classList.add('photo')
    figure.appendChild(img)
    showcase.appendChild(figure)
  }
}

render()
