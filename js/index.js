'use strict';

// scss
require('../scss/index.scss');

console.log('this is javascript')

function render() {
  let i = 20;

  while (i--) {
    let src = i % 3 === 0 ? 'https://placekitten.com/700/1000' : 'https://placekitten.com/1000/700'

    let showcase = document.getElementById('showcase')

    // let figure = document.createElement('figure')
    let img = document.createElement('img')
    img.src = src;
    img.classList.add('photo')
    // figure.appendChild(img)
    showcase.appendChild(img)
  }
}

render()
