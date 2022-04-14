const btn = document.querySelector('.btn')
const ball = document.querySelector('.ball')
const main = document.querySelector('main')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  ball.classList.toggle('active-b')
  main.classList.toggle('active-m')
})