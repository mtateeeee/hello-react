// import './App.css';
// import styled from 'styled-components';
// // import { useState } from 'react';
// // import { Counter2 } from 'components/Counter';
// import { Creater } from 'components/Creater/Creater';
// import { Button } from 'components/Button';
// import Card from 'components/Card';
// import plusIcon from 'assets/plus.svg'
// import rightArrow from 'assets/right-arrow.svg'
// const AppWrapper = styled.div`
//   text-align: center;
//   .button-content {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 14px 16px;
//     font-weight: 700;
//     font-size: 13px;
//     color: #27262E;
//   }
// `;

import {Routes, Route} from "react-router-dom";
import Home from "containers/Home";
import About from "containers/About";
import Login from "containers/Login";

function App() {

  return (

    // <AppWrapper>
    //   <header className="App-header">
    //     <div style={{display:'flex'}}>
    //       <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
    //       <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
    //       <Card title={"Roi"} amount="+14.02%" percent={-5.1}></Card>
    //       <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
    //     </div>
    //     <div>
    //     <Creater title={"Top Creator"} amount="Michael Jordan" percent={3.2}></Creater>

    //     </div>


    //   </header>
    // </AppWrapper>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
  )
}

export default App;
