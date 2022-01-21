const process = require('process')

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

setTimeout(() => {
  console.log('setTimeout')
}, 0)

// taskque에 콜백함수가 있어도,
// nextTick안의 콜백함수를 taskque의 맨 앞에 넣어서,
// 콜백 함수들 중에서 젤 먼저 실행시킨다.
process.nextTick(() => {
  console.log('nextTick')
})

for (let i = 0; i < 100; i++) {
  console.log('for loop')
}
