console.log('code1') // 첫번째 실행
console.time('timeout 0')
setTimeout(() => {
  // 다섯번째 실행
  console.timeEnd('timeout 0')
  console.log('setTimeout 0')
}, 0)

console.log('code2') // 두번째 실행
setImmediate(() => {
  // 여섯번째 실행
  console.log('setImmediate')
})

console.log('code3') // 세번째 실행
process.nextTick(() => {
  //네번째 실행
  console.log('process.nextTick')
})

// console 출력

// code1
// code2
// code3
// process.nextTick
// timeout 0: 1.411ms
// setTimeout 0
// setImmediate
