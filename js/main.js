'use strict'

const btns = document.querySelectorAll('#btn')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.menu').classList.toggle('active')
  })
})
