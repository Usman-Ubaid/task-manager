import { StyledInput } from "../../styles/Input";

type InputProps = {
  type: string;
  placeholder?: string;
  value: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, value, onChange, id }: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      id={id}
      required
    />
  );
};

export default Input;
