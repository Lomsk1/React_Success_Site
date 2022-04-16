import styled from "styled-components";
import Buttons from "../../button";

function Forms() {
  return (
    <MainDiv>
      <form action='/action_page.php'>
        <label>Enter Your Name</label> <br />
        <input type='text' /> <br />
        <label>Enter Your Enter Your Email*</label> <br />
        <input required type='email' /> <br />
        <label>Enter Your Subject</label> <br />
        <input type='text' /> <br />
        <label>Message</label> <br />
        <textarea />
        <Buttons>{'Submit'}</Buttons>
      </form>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-family: normal;
    font-size: 17px;
  }
  input {
    width: 100%;
    height: 2.5em;
    border: 2px solid black;
    background-color: transparent;
    padding: 10px;
    font-family: normal;
  }
  input[type="email"]:focus {
    border: 2px solid red;
  }

  input:focus {
    outline: none !important;
    box-shadow: inset 0 0 2px black;
  }

  textarea {
    resize: none;
    height: 20%;
    border: 2px solid black;
    padding: 10px;
    background-color: transparent;
  }
  textarea:focus { 
    outline: none !important;
    box-shadow: inset 0 0 2px black;
 }
 button {
     align-self: end;
     margin-top: 2em;
 }
`;

export default Forms;
