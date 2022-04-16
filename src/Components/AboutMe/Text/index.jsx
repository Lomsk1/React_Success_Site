import styled from "styled-components";

function Text() {
  return (
    <MainDiv>
      <TextOneDiv>
        <TextOne>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page.
        </TextOne>
      </TextOneDiv>
      <TextTwoDiv>
        <TextTwo>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.
        </TextTwo>
      </TextTwoDiv>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 795px){
    transform: translate(-20%, -15%);
  }
`;

const TextOneDiv = styled.div`
  width: 55%;
  height: 45%;
  transform: translateX(10%);
  @media (max-width: 795px){
    width: 90%;
    transform: translateX(25%);
    overflow: scroll;
  }
`;
const TextOne = styled.p`
  font-family: normal;
  line-height: 1.7em;
  font-size: 1rem;
  letter-spacing: 0.02em;
  @media (max-width: 795px){
    font-size: 0.9rem;
  }
`;

const TextTwoDiv = styled.div`
  width: 55%;
  height: 40%;
  transform: translateX(10%);
  @media (max-width: 795px){
    width: 90%;
    transform: translateX(25%);
    overflow: scroll;
  }
`;

const TextTwo = styled.p`
  font-family: normal;
  line-height: 1.7em;
  font-size: 1rem;
  letter-spacing: 0.02em;
  @media (max-width: 795px){
    font-size: 0.9rem;
    transform: translateY(25%);
  }
`;

export default Text;
