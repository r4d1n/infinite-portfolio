'use strict'

import { assert } from 'chai'
import { getImages, render, regulate } from '../js/index'


suite('mocha tests', () => {

  setup(() => {
    let body = document.querySelector('body')
    body.innerHTML = `<header class='header'>
    <h1 class='name'>R4D1N.NET</h1>
    </header>
    <div class='primary container'>
    <div class="container" id='showcase'>
    </div>
    </div>`
  })

  test('has document', () => {
    assert(true, 'this is true')
    assert(false, 'this is false')
  })

})
