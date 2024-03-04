import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledWrapper from "../styles/common/Wrapper";
import StyledLink from "../styles/common/Link";
import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";

const Login = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </StyledHeader>
        <div className="form-wrapper">
          <StyledForm>
            <label
              hidden
              className="label-hidden"
              htmlFor="email"
              aria-hidden="true"
            >
              Title
            </label>
            <Input type="text" placeholder="Enter password" />
            <label
              aria-hidden="true"
              hidden
              className="label-hidden"
              htmlFor="password"
            >
              Password
            </label>
            <Input type="password" placeholder="Enter email" />
            <SubmitButton type="submit" value="Login" />
          </StyledForm>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Login;
