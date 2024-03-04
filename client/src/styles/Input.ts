import styled from "styled-components";

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2rem;
  width: 80%;
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 1px;

  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
`;

const SubmitButton = styled(StyledInput).attrs({
  type: "submit",
})`
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export { StyledInput, SubmitButton };
