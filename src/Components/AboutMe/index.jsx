import styled from "styled-components";
import Title from "./Title";
import Text from "./Text";
import Buttons from "../button";

function AboutMe() {
  return (
    <MainDiv>
      <LeftDiv>
        <Title>{"ABOUT ME"}</Title>
        <Text></Text>
        <ButtonDiv>
        <Buttons>{"Read More"}</Buttons>
        </ButtonDiv>
      </LeftDiv>
      <RightDiv></RightDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/images/ea71bb_e7959a5be116482b9727a9be900d2d35_mv2_d_5454_3840_s_4_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonDiv = styled.div`
width: 44%;
height: max-content;
@media (max-width: 380px){
  transform: translateX(-30%);
}
`;
export default AboutMe;
