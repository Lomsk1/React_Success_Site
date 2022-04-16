import styled from "styled-components";

function Buttons( { children } ) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  width: 129px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
      border: 2px solid black;
      background-color: white;
      color: black;
      transition: 700ms;
  }
  `

export default Buttons;
