import styled from "styled-components";
import Divs from "./Divs";

function Services() {
  return (
    <MainDiv>
      <Div>
        <Divs amount={"$70"} date={"1 hour"}>
          {"ONLINE COACHING"}
        </Divs>
        <Divs date={"1 hr 30 min"} amount={"$120"}>
          {"Couple's Guidance"}
        </Divs>
        <Divs weeks={"Mon, Tue, Wed, Thu, Fri"} date={"1hr"} amount={"$90"}>
          {"Self-Improvement Workshop"}
        </Divs>
      </Div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 680px) {
    justify-content: center;
    width: 100%;
    overflow: scroll;
    justify-content: start;
  }
  @media (max-width: 460px) {
    overflow: scroll;
  }
`;

export default Services;
