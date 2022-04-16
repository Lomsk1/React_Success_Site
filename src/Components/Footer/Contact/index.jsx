import styled from "styled-components";
import Social from "./Social";

function Contact() {
  return (
    <MainDiv>
      <TitleDiv>
        <Div>
          <LineDiv />
        </Div>
        <DivP>
          <p>Contact</p>
        </DivP>
      </TitleDiv>
      <Address>
        <p>500 Terry Francois Street</p>
        <p>San Francisco, CA 94158</p>
      </Address>
      <Address>
        <p>Tel: 123-456-7890</p>
        <p>Fax: 123-456-7890</p>
      </Address>
      <Address>
        <p>info@mysite.com</p>
      </Address>
      <Social></Social>
      <Address>
        <p>© 2023 by Personal Life Coach. Proudly created with Wix.com</p>
      </Address>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.1rem;
    font-family: bolder;
  }
  @media (max-width: 460px) {
    transform: translateY(20%);
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
const DivP = styled.div`
  width: 42%;
  height: max-content;
`;

const Address = styled.div`
  width: 50%;
  height: 15%;
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.7em;
    font-size: 0.8rem;
  }
  @media (max-width: 460px) {
    transform: translateY(-20%);
  }
`;

export default Contact;
