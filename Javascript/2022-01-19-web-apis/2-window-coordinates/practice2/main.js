const btn = document.getElementById('findRabbitBtn')
const rabbit = document.getElementById('rabbitImg')
const pTag = document.getElementById('pTag')

btn.innerText = '토끼 찾기~~'

function changeState(x, y) {
  if (rabbit.style.opacity == 0) {
    rabbit.style.opacity = 1
    btn.innerText = '토끼 숨어랏!!'
    pTag.innerText = `내 좌표는 ( ${x}, ${y} ) 이지롱~ ㅎㅎ`
    pTag.style.opacity = 1
  } else {
    rabbit.style.opacity = 0
    btn.innerText = '토끼 찾기~~'
    pTag.style.opacity = 0
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()

  changeState(e.clientX, e.clientY)
})
