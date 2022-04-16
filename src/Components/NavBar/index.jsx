import styled from "styled-components";
import Tabs from "./Tabs";
import '../../assets/fonts/fonts.css';

function NavBar() {
  return (
    <Main>
      <Left>
        <DivAlan>
          <Alan>
            <a href='#'>ALLAN JOHNSON</a>
          </Alan>
        </DivAlan>
        <DivPersonal>
          <Personal>
            <a href='#'>Personal Life Coach</a>
          </Personal>
        </DivPersonal>
      </Left>
      <Right>
        <Tabs />
      </Right>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 124px;
  background-color: white;
  position: fixed;
  display: flex;
  z-index: 20;
  @media (max-width: 1020px){
    
  }
`;
const Left = styled.div`
  width: 45%;
  height: 100%;
  @media (max-width: 1020px) {
    width: 25%;
  }
  @media (max-width: 1020px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 55%;
  height: 100%;
  @media (max-width: 1020px) {
    width: 75%;
  }
  @media (max-width: 1020px){
    width: 100%;
  }
`;

const Alan = styled.p`
  text-align: center;
  font-size: 1.1em;
  /* font-weight: bold; */
  a {
    text-decoration: none;
    color: black;
    font-family: bolder;
  }
`;

const Personal = styled.p`
  text-align: center;
  font-size: 0.9em;
  a {
    text-decoration: none;
    color: black;
    font-family: normal;
  }
`;
const DivAlan = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivPersonal = styled.div`
  width: 100%;
  height: 40%;
  transform: translateY(-20%);
`;

export default NavBar;
