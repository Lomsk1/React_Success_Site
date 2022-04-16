import { Children } from "react";
import styled from "styled-components";

import Buttons from "../../../button";

function Divs({ children, date, amount, weeks }) {
  return (
    <Div>
      <DivOne>
        <h2>{children}</h2>
      </DivOne>
      <DivTwo>
        <p>Use this area to describe one of your services.</p>
      </DivTwo>
      <DivThree>
        <div />
      </DivThree>
      <DivFour>
        <p>{weeks}</p>
        <p>{date}</p>
        <p>{amount}</p>
      </DivFour>
      <DivFive>
        <Buttons>{"Book It"}</Buttons>
      </DivFive>
    </Div>
  );
}

const Div = styled.div`
  width: 20%;
  height: 80%;
  border: 7px solid black;
  min-width: 180px;
  @media (max-width: 1021px) {
    width: 30%;
  }
  @media (max-width: 680px) {
    width: 35%;
    margin-left: 0.5em;
  }
`;

const DivOne = styled.div`
  width: 100%;
  height: 30%;
  h2 {
    line-height: 1.33em;
    font-family: bolder;
    text-align: center;
    font-size: 1.3rem;
    @media (max-width: 1300px) {
      font-size: 1rem;
    }
    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
    @media (max-width: 460px){
      font-size: 0.6rem;
    }
  }
`;
const DivTwo = styled.div`
  width: 100%;
  height: 15%;
  p {
    line-height: 1.5em;
    font-family: normal;
    text-align: center;
    @media (max-width: 1300px) {
      transform: translateY(-70%);
    }
    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;
const DivThree = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 85%;
    background-color: black;
    height: 3px;
    @media (max-width: 1300px) {
      transform: translateY(-1200%);
    }
  }
`;
const DivFour = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    line-height: 2em;
    font-family: normal;
    @media (max-width: 1300px) {
      transform: translateY(-80%);
    }
    @media (max-width: 1021px) {
      font-size: 0.8rem;
    }
    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;
const DivFive = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`;

export default Divs;
