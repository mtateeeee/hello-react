//import './App.css';
import * as React from "react";
import styled from 'styled-components';
import { Creater } from 'components/Creater/Creater';
import { Button } from 'components/Button';
import Card from 'components/Card';
import plusIcon from 'assets/plus.svg'
import rightArrow from 'assets/right-arrow.svg'
import { Link, Route } from "react-router-dom";
import { PrimaryLayout } from "components/Layout";
const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }
`;

const Home = () => {
    return (
      <PrimaryLayout>
        <AppWrapper>
          <header className="App-header">
            <div className="card-wrapper">
              <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
              <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
              <Card title={"Revenue"} amount="4.02" percent={12.3}></Card>
              <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            </div>
          </header>
        </AppWrapper>
      </PrimaryLayout>
    );
  };
  export default Home;
