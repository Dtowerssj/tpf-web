import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logoSolo.png";
import Input from "../../../components/login/Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>
          TRADING PIPS 
          <br />FACTORY
          
        </h3>
        <span>ACADEMY</span>
      </LogoWrapper>
      <Form>
        <h3>Regístrate</h3>
        <Input placeholder="Nombre" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirmar Contraseña" />
        <button>Regístrate</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          ¿Ya tienes una cuenta? <span>Inicia Sesión</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  font-family: var(--font-family);
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #dadde3;
  //color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: var(--font-family);
    color: #fff;
    margin-bottom: 0.8rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    //background: linear-gradient(89.97deg, #6b36e7 1.84%, #9092ff 102.67%);
    background-color: #FE1717;
    color: #fff;
    font-family: var(--font-family);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 6rem;
  }

  h3 {
    margin-top: 0.8rem;
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-family: "GorditaMedium";
    letter-spacing: 3px;
  }

  span {
    color: #FE1717;
    font-size: 12px;
    margin-top: 0.2rem;
    letter-spacing: 3px;
    font-family: "GorditaMedium";
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 464px;
  backdrop-filter: blur(35px);
  //background-color: rgba(4, 12, 24, 0.75);
  background-color: rgba(3, 27, 52, 1);
  height: 100%;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      font-weight: 800;
      color: #FE1717;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
