/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 바지 추천', '남자 상위 추천']);
  let posts = '강남 고기 맛집';

  let [따봉, 따봉변경] = useState(0);

  function 제목변경() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
    // 글제목변경(['여자 코트 추천', '남자 바지 추천', '남자 상위 추천']);
  }

  return (
    <div className="App">
      <div class="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>🤘</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <button onClick={제목변경}>버튼</button>

    </div >
  );
}

export default App;
