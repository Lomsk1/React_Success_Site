import styled from "styled-components";
import Contact from "./Contact";
import Forms from "./Forms";

function Footer() {
    return ( 
        <MainDiv>
            <LeftSide>
                <Contact></Contact>
            </LeftSide>
            <RightSide>
                <Forms></Forms>
            </RightSide>
        </MainDiv>
     );
}

const MainDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: #57BBBF;
`

const LeftSide = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const RightSide = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default Footer;