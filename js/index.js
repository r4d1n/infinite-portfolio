'use strict';

// bundle scss
require('../scss/index.scss');

console.log('this is javascript')

render(getImages())

export function getImages() {
  let i = 20;
  let sources = []

  while (i--) {
    let src = i % 3 === 0 ? 'https://placekitten.com/700/1000' : 'https://placekitten.com/1000/700'
    sources.push(src)
  }

  return sources
}

export function render(sources) {
  let i = sources.length

  let showcase = document.getElementById('showcase')

  if (showcase) {
    while (i--) {
      let src = sources[i]
      // let figure = document.createElement('figure')
      let img = document.createElement('img')

      img.src = src;
      img.classList.add('photo')
      // figure.appendChild(img)
      showcase.appendChild(img)

      regulate()
    }
  }

}

export function regulate() {
  let images = document.querySelectorAll('.photo')
  console.log(images)
}
