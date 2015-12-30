'use strict';

// bundle scss
require('../scss/index.scss');

const BUCKET_DOMAIN = 'http://photo.r4d1n.net.s3-website-us-west-2.amazonaws.com'

const imgs = [
  'yahoo.jpg',
  'tulips.jpg',
  'triplex-portrait.jpg',
  'carwash-pattern.jpg',
  'succulent.jpg',
  'market-nest.jpg',
  'port-coop.jpg',
  'cliff-hose.jpg',
  'grubhub.jpg',
  'doorway-portrait.jpg',
  'temescal-tree.jpg',
].reverse().map((name) => `${BUCKET_DOMAIN}/images/${name}`)

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
