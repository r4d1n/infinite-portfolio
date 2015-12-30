'use strict';

// bundle scss
require('../scss/index.scss');

const imgs = [
  'yahoo',
  'tulips',
  'triplex-portrait',
  'carwash-pattern',
  'succulent',
  'market-nest',
  'port-coop',
  'cliff-hose',
  'grubhub',
  'doorway-portrait',
  'temescal-tree',
].reverse().map((name) => `/images/${name}.jpg`)

render(imgs)

function render(sources) {

  console.log(sources)
  let i = sources.length

  let showcase = document.getElementById('showcase')

  if (showcase) {
    while (i--) {
      let src = sources[i]
      let wrapper = document.createElement('div')
      let img = document.createElement('img')

      img.src = src;
      img.classList.add('photo')
      wrapper.classList.add('wrapper')
      wrapper.appendChild(img)
      showcase.appendChild(wrapper)

      regulate()
    }
  }

}

function regulate() {
  let images = document.querySelectorAll('.photo')
  console.log(images)
}
