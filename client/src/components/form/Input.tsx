import { StyledInput } from "../../styles/Input";

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
};

const Input = ({ type, placeholder, value }: InputProps) => {
  return <StyledInput type={type} value={value} placeholder={placeholder} />;
};

export default Input;
