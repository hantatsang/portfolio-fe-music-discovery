import styled from "styled-components";

const ActionButton = styled.button`
  box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
  border: none;
  border-radius: 50%;
  outline: none;
  background: #ff5242;
  color: #ffffff;
  min-width: 60px;
  min-height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.14);
    background: #ff3b29;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default ActionButton;
