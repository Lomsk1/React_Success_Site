import styled from "styled-components";

function Tabs() {
  return (
    <Main>
      <Div>
        <Ul>
          <Li>
            <a href='#1'>Home</a>
          </Li>
          <Li>
            <a href='#2'>About</a>
          </Li>
          <Li>
            <a href='#3'>Services</a>
          </Li>
          <Li>
            <a href='#4'>Blog</a>
          </Li>
          <Li>
            <a href='#5'>Guides</a>
          </Li>
          <Li>
            <a href='#6'>Contact</a>
          </Li>
        </Ul>
      </Div>
      <DivTwo>
        <LogIn>
          <a href='#7'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-person-circle'
              viewBox='0 0 16 16'
            >
              <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
              <path
                fill-rule='evenodd'
                d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
              />
            </svg>
            Log In
          </a>
        </LogIn>
      </DivTwo>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 1020px) {
    margin-left: 2em;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width: 390px){
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 370px){
    flex-wrap: wrap;
  }
`;
const Li = styled.li`
  margin-right: 12%;

  a {
    text-decoration: none;
    color: black;
    font-family: normal;
    &:hover {
      color: cyan;
      transition: 700ms;
    }
  }
  @media (max-width: 600px){
    margin-right:8%;
  }
  @media (max-width: 510px){
    margin-right:5%;
  }
  @media (max-width: 435px){
    margin-right:5%;
  }
  @media (max-width: 390px){
    margin-right:0.6em;
  }
`;

const DivTwo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1240px) {
    transform: translateX(50%);
  }
`;
const LogIn = styled.p`
transform: translateY(-15%);
  svg {
    transform: translate(-100%, 20%);
  }
  a {
    color: #317f81;
    text-decoration: none;
    font-family: normal;
    &:hover {
      color: cyan;
      transition: 700ms;
    }
  }
  @media (max-width: 485px) {
    transform: translate(-10%, -190%)
  }
  @media (max-width: 435px) {
    transform: translate(-50%, -190%)
  }
`;

export default Tabs;
