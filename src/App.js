/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목 , 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [date, setDate] = useState(['2014-08-18', '2016-08-17', '1994-04-19']);

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
              <h4 onClick={()=>{ setModal(!modal); setTitle(i)}}>{ 글제목[i] } 
                <span onClick={(e)=>{ e.stopPropagation();
                let repl = [...따봉];
                repl[i] = repl[i] + 1
                따봉변경(repl) 
                }}>👌</span> {따봉[i]}</h4>
              <p>{date[i]}</p>
              <button onClick={()=>{
                let del = [...글제목];
                del.splice(i,1);
                글제목변경(del);
              }}>게시글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        입력값변경(e.target.value)
      }} />
      <button onClick={()=>{
        let check = 입력값;
        if(check != null && check != ''){
          const nowDate = new Date();
          var year = nowDate.getFullYear();
          var month = ('0' + (nowDate.getMonth() + 1)).slice(-2);
          var day = ('0' + nowDate.getDate()).slice(-2);
          var todate = year + '-' + month + '-' + day;

          let 추가글제목 = [...글제목];
          let 추가따봉 = [...따봉];
          let addDate = [...date];
          추가글제목.unshift(입력값);
          추가따봉.unshift(0);
          addDate.unshift(todate);
          글제목변경(추가글제목);
          따봉변경(추가따봉);
          setDate(addDate);
        } else {
          alert('공백을 입력할 수 없습니다. 글을 작성해주세요.')
        }
        
      }}>글발행</button>


      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} title={title} date={date} /> : null
      }
<Modal2></Modal2>
    </div>
  );
}

function Modal(props){
  return(
      <div className='modal' style={{background: props.color}} >
        <h4>{props.글제목[props.title]}</h4>
        <p>{props.date}</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

// class로도 컴포넌트를 만들 수 있다.
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
