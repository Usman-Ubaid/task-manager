import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";
import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledLink from "../styles/common/Link";
import StyledWrapper from "../styles/common/Wrapper";
import useForm from "../hooks/useForm";
import { registerUser } from "../services/authApi";
import { errorMessage } from "../utils/errorMessage";
import { setToastMessage } from "../utils/toastMessage";

const Register = () => {
  const { formData, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);
      setToastMessage("success", result.message);
    } catch (err) {
      const error = errorMessage(err);
      setToastMessage("error", error);
    }
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </StyledHeader>
        <div className="form-wrapper">
          <StyledForm onSubmit={handleSubmitForm}>
            <label
              hidden
              className="label-hidden"
              htmlFor="username"
              aria-hidden="true"
            >
              Title
            </label>
            <Input
              type="text"
              placeholder="Enter username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label
              hidden
              className="label-hidden"
              htmlFor="email"
              aria-hidden="true"
            >
              Title
            </label>
            <Input
              type="text"
              placeholder="Enter email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label
              aria-hidden="true"
              hidden
              className="label-hidden"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <SubmitButton type="submit" value="Register" />
          </StyledForm>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Register;
