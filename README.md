리액트를 이용한 BLOG 만들기

<20220815>
프로젝트 생성
- npx create-react-app (프로젝트명)

프로젝트 시작
- npm start

JSX 문법 3가지
1. class를 쓰고 싶을 때는 className
2. 변수 사용할 땐 중괄호 문법 {}
3. style = {{이름 : 값}} 형태로 style 적용


<20220816>
HTML 작성 시 return 소괄호 안에 작성.
return() 안에는 병렬로 태그 2개 이상 기입 금지.

자료 잠깐 저장할 땐 변수 이용.
자료 잠깐 저장할 때 state 써도 됨.

state 만드는 법
1. import {useState}
2. useState(보관할 자료)
3. let[작명1, 작명2]
- 작명1 : state에 보관한 값
- 작명2 : state 변경을 도와주는 함수.

(참고) Destructuring 문법
let [a, c] = [1, 2];

Q. state 쓰는 이유?
- state는 변경되면 html이 자동 재렌더링됨.

자주 변경될 거 같은 html 부분은 state로 만들어놓기.


/* eslint-disable */
- Lint 끄는 기능.

state 변경하는 법
- 등호로 변경 금지.
- state변경함수(새로운state)

array/object 다룰 때, 원본은 보존하는게 좋음.

[state 변경함수 특징]
- 기존state==신규state의 경우 변경 안 해줌.

[array/object 특징]
- array/object 담은 변수엔 화살표만 저장됨.
- 변수1&변수2 화살표가 같으면 변수1==변수2 비교해도 true 나옴.
- array, object는 reference data type이라서 그럼.

정리
- state가 array/object이면 shallow copy를 만들어서 수정해야 함.