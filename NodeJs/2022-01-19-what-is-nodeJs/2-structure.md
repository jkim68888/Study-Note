# Structure of Node.js

## 노드의 구조

### Memory Heap?

- 동적으로 생성한 데이들을 보관하는 곳

### Call Stack?

- 함수의 순서를 정확하게 기억하는 곳

// Call Stack

```txt

Node.js App의 콜스택에

첫번째 호출 함수 Main()
두번째 호출 함수 First()
세번째 호출 함수 Second()

이 있다고 가정하면,,

Main() 실행 => First() 실행 => Second() 실행 => First()에서 Second()를 호출한 시점으로 돌아감 => First()에서 Second()의 리턴값을 처리 => 마찬가지로 Main()으로 돌아감

따라서 콜스택을 통해서 함수의 순차적인 흐름을 감지할 수 있다.

```

// None-blocking 에서의 Call Stack

```txt

Node.js App의 콜스택에

첫번째 호출 함수 Main()
두번째 호출 함수 First()
세번째 호출 메소드 SetTimeout()

이 있다고 가정하면,,

Main() => First() => setTimeout() 으로 콜백을 던져줌 => 시간을 기다리지 않고 순차적으로 함수 진행 => 시간이 다되면 콜백을 Task Queue에 담는다.

(Task Queue는 대기줄이라고 생각하면 된다.)

```

### Event Loop?

- Call Stack이 비어있으면 Task Queue에 저장된 콜백함수를 Call Stack으로 불러온다.
- Call Stack 과 Task Queue를 연결시켜주는 것이 Event Loop이다.

### Node.js의 내부

- Javascript Engine (C++로 작성됨), Libuv (C언어로 작성됨), 다양한 모듈들 (http parsing, tls, crypto, async DNS request 등의 모듈) 이 존재한다.

### 주의점

- 콜백함수에서는 무거운 계산 (예를 들어 이미지 리사이징, 비디오 인코딩 등) 을 하면 안된다. 이벤트 루프를 막기 때문이다.
