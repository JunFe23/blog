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

<20220821>
컴포넌트 만드는법
1. function 만들고
2. retrun() 안에 html 담기
3. <함수명></함수명> 쓰기

(참고)
return() 안에 html병렬기입하려면
의미없는 <div> 대신 <></> 사용가능

<함수명/>으로도 컴포넌트 사용 가능

컴포넌트 쓰면 좋을 떄
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들

컴포넌트의 단점
- state 가져다쓸 때 문제점 생김.


<20220822>
리액트에서 동적인 UI 만드는 step
1. html, css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장.
3. state에 따라 UI가 어떻게 보일지 작성

html 중간에 조건문 쓰려면 삼항연산자를 써라.

반복문으로 같은 html 반복재생하는 법.
map() 사용법
1. array 자료 갯수만큼 함수안의 코드 실행해줌.
2. 함수의 파라미터는 array 안에 들어있던 자료임
3. return에 뭐 적으면 array로 담아줌.

결론 : 비슷한 html 반복 생성하려면 map() 쓰며 됨.

map()
- 왼쪽 array 자료만큼 내부코드 실행
- return 오른쪽에 있는걸 array로 담아줌
- 유용한 파라미터 2개 사용가능

(참고)
- 반복문으로 html 생성하면 key={html마다 다른숫자} 추가해야함.


<20220823>
props
부모 -> 자식 state 전송
1. <자식컴포넌트 작명 = {state이름}>
2. props 파라미터 등록 후 props.작명 사용

(정보) 파라미터 문법은 다양한 기능을 하는 함수를 만들 때 사용함.