import styled from "styled-components";

const TextInput = styled.input`
  border: none;
  border-bottom: 3px solid #a1a1a1;
  margin-bottom: 10px;
  background: transparent;
  width: 100%;
  font-size: 2rem;
  transition: all 0.3s;

  &:focus, &:active {
    padding-bottom: 10px;
    margin-bottom: 0;
    border-bottom: 3px solid #ff5242;
    outline: none;
  }
`;

export default TextInput;
