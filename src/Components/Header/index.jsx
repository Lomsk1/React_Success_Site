import styled from "styled-components";
import Buttons from "../button";
import '../../assets/fonts/fonts.css';

function Header({children}) {
  return (
    <Div>
      <TextOne>AMBITION IS THE FIRST STEP TOWARDS</TextOne>
      <Success>SUCCESS</Success>
      <TextTwo>Now Available for Online Coaching</TextTwo>
      <Buttons children={'Book Now'}/>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background-image: url('./images/11062b_9de2dbff3dda403b944bb98c41cb5764f000.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const TextOne = styled.p`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  font-family: bigger;
  @media (max-width: 670px){
    font-size: 1rem;
  }
  @media (max-width: 485px) {
    font-size: 0.7em;
  }
`;

const Success = styled.h1`
  line-height: 1.3em;
  text-align: center;
  font-size: 6rem;
  font-family: bolder;
  @media (max-width: 670px){
    font-size: 4rem;
  }
  @media (max-width: 485px) {
    font-size: 3rem;
  }
`;

const TextTwo = styled.p`
  letter-spacing: 0.05em;
  text-align: center;
  font-size: 1.3rem;
  font-family: bigger;
  margin-bottom: 1em;
  @media (max-width: 670px){
    font-size: 1rem;
  }
  @media (max-width: 485px) {
    font-size: 0.7em;
  }
`;

export default Header;
