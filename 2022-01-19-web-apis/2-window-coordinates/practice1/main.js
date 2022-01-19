const cursor = document.getElementById('cursor')
const x = document.getElementById('x')
const y = document.getElementById('y')

document.addEventListener('mousemove', (e) => {
  x.innerText = e.clientX + ','
  y.innerText = e.clientY

  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})
