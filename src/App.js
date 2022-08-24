/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목 , 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    return '1233211'
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBlog </h4>
      </div>

      <button onClick={()=>{

        let arr = [1,2,3];

        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{
        
        let copy2 = [...글제목].sort();
        글제목변경(copy2);

      }}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1)}}>👌</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {modal == false? setModal(true) : setModal(false)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[i] } 
                <span onClick={()=>{ 
                let repl = [...따봉];
                repl[i] = repl[i] + 1
                따봉변경(repl) 
                }}>👌</span> {따봉[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} /> : null
      }

    </div>
  );
}

function Modal(props,i){
  return(
      <div className='modal' style={{background: props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;
