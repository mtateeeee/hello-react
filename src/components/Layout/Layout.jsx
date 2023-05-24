import Header from "components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Frame from "assets/Frame.svg";
// import {SideBar} from "components/SideBar"



const LayoutStyled = styled.div`
  background-color: #1c233d;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentStyled = styled.div`
  background-color: #f23412;
  margin-top: 64px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  background-color: #aaf031;
  float: left;
  width: 20%;
  height: 100vh;
`;
const Icon = styled.div`

  display: flex;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  //font-feature-settings: 'salt' on;

  color: #27262E;

`




const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <Icon>
          <img src={Frame}></img>
          <div>
            <p>MyNFT</p>
            <p>NFT Marketplace</p>
          </div>
        </Icon>
        <Nav>
        <Link to="/" >
          Dashboard
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/login">
          Login
        </Link>
        </Nav>
        {/* <SideBar></SideBar> */}
        <div>1234</div>
      </SideBarStyled>

      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
