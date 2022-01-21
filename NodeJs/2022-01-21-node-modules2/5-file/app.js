const fs = require('fs')
// fs : file system

// 모든 api는 3가지 형태로 제공된다.
// try { renameSync(...) } catch(err) {} -> blocking (동기적으로 진행됨)
// rename(..., callback(error, data)) -> 콜백형태로 전달 (비동기적으로 진행됨)
// promises.rename().then().catch(0) -> promise 형태로 전달 (비동기적으로 진행됨)

try {
  fs.renameSync('./text.txt', './text-new.txt')
} catch (error) {
  console.error(error)
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.error(error)
})
console.log('hello')

fs.promises
  .rename('./text.txt', 'j./text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error)
