console.log('logging')
console.clear()

// log level
console.log('log') // 개발
console.info('info') //정보
console.warn('warn') // 경고
console.error('error') // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!')
console.assert(2 === 2, 'same!')

// print object
const student = { name: 'jihyun', age: 28, company: { name: 'purpleseed' } }
console.log(student)
console.table(student)
console.dir(student, { showHidden: true, colors: false, depth: 0 })
