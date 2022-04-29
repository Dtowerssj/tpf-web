import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/bg2.png";
import Sidebar from "./containers/Sidebar";
import Main from "./containers/Main";

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: linear-gradient(rgba(4, 12, 24, 0.5), rgba(4, 12, 24, 0.5)), url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;


export default SignUp;
