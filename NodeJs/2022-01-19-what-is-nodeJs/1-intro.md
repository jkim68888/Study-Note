# What's Node.JS ?

## 노드의 특징

### 1. JavaScript Runtime

- 노드는 자바스크립트 런타임 환경이다.
- 따라서 자바스크립트 언어로 작성할 수 있다.

<br/>

### 2. Single Thread

#### 스레드?

- 프로세스 안에서 원하는 기능마다 스레드를 만들어서 개별적으로 병렬적으로 동작한다.

#### 스레드가 많으면 좋을까?

- NO! -> 메모리 사용량 증가하며, 여러가지 스레드를 스케쥴링 해야되서 기회비용이 많이 든다.

#### 멀티 스레딩?

- 여러가지 스레드를 만들어서 쓰는 것
- ex. Java

#### 자바스크립트 = 싱글 스레드 언어?

- 멀티 스레딩 불가능
- 하나의 일을 수행하면 다 끝나야 다음 동작으로 넘어가는 `동기적` 언어 이다.

#### Node.js 의 효율적 싱글 스레드 사용

- Non-Blocking I/O 와 Event-Drive 이라는 Node.js 의 특징 때문에 여러가지 일들을 동시다발적으로 할 수 있다.

<br/>

### 3. Non-Blocking I/O

#### IO란?

- I : Input
- O : Output
- IO 는 컴퓨터에서 물리적인 것 (파일, 데이터베이스, 네트워크 등)을 읽고 쓰는것을 말한다.

#### 상반되는 개념 : CPU

- CPU는 내부적으로 연산한다.
- IO는 외부적으로 읽고 쓴다.

#### Non-Blocking ?

- 비동기적 (블로킹을 하지 않는다.)
- Non-Blocking은 IO를 할때 기다리지 않고 콜백을 던져주고 나서 바로 다음으로 넘어간다.

<br/>

### 4. Event-Driven

- Event를 통해서 등록된 콜백을 실행할 수 있게 해준다.
