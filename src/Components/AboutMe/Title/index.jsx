import { Children } from "react";
import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

function Title({ children }) {
  return (
    <MainDIv>
      <Div>
        <LineDiv />
      </Div>
      <DivH2>
        <H2>{children}</H2>
      </DivH2>
    </MainDIv>
  );
}

const MainDIv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 795px){
    transform: translateX(-20%);
  }
`;
const LineDiv = styled.div`
  width: 40px;
  height: 5px;
  background-color: black;
`;

const Div = styled.div`
  width: 42%;
  height: 15%;
`;

const DivH2 = styled.div`
  width: 42%;
  height: max-content;
`;

const H2 = styled.h2`
  letter-spacing: -0.1em;
  line-height: 1.2em;
  font-size: 3em;
  font-family: bolder;
  @media (max-width: 795px) {
    font-size: 2em;
  }
`;

export default Title;
