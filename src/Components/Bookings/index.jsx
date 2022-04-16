import styled from "styled-components";
import Title from "../AboutMe/Title";
import Services from "./Choose";
import Buttons from "../button";

function Bookings() {
  return (
    <MainDiv>
      <TitleDiv>
        <TitleDivTwo>
          <Title>{"How I Can Help You"}</Title>
        </TitleDivTwo>
      </TitleDiv>
      <Services />
      <Buttons>{'More Services'}</Buttons>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-image: url('./images/84770f_0cf5b6c1550a4b8c92f92f1064cc68de_mv2.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;

const TitleDivTwo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default Bookings;
