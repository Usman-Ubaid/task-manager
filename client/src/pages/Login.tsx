import { useNavigate } from "react-router-dom";
import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledWrapper from "../styles/common/Wrapper";
import StyledLink from "../styles/common/Link";
import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";
import useForm from "../hooks/useForm";
import { loginUser } from "../services/authApi";
import { errorMessage } from "../utils/errorMessage";
import { setToastMessage } from "../utils/toastMessage";
import { saveToken } from "../utils/tokenStorage";

const Login = () => {
  const { formData, handleInputChange } = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData);
      saveToken(result.user.token);
      setToastMessage("success", result.message);
      navigate("/");
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
          <StyledForm onSubmit={handleLoginSubmit}>
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
              value={formData.email}
              onChange={handleInputChange}
              id="email"
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
              placeholder="Enter email"
              value={formData.password}
              onChange={handleInputChange}
              id="password"
            />
            <SubmitButton type="submit" value="Login" />
          </StyledForm>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Login;
