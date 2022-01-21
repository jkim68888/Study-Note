function hello() {
  console.log(this) // class 외부에서 쓰이는 함수에서 this는 global이다.
  console.log(this === global)
}

hello()

class A {
  constructor(num) {
    this.num = num
  }

  memberFunction() {
    console.log('========= class =========')
    console.log(this) // class에서 this는 class 자기 자신을 가리킨다.
    console.log(this === global)
  }
}

const a = new A(1)
a.memberFunction()

console.log('========= global scope ========')
console.log(this) // this는 모듈의 eaports를 가르킨다. (글로벌 오브젝트는 아니다.)
console.log(this === module.exports)

// 브라우저에서는 this가 글로벌 객체이나, Node에서는 this는 module.exports이다.
