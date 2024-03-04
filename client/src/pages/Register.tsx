import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";
import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledLink from "../styles/common/Link";
import StyledWrapper from "../styles/common/Wrapper";

const Register = () => {
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
              htmlFor="username"
              aria-hidden="true"
            >
              Title
            </label>
            <Input type="text" placeholder="Enter username" />
            <label
              hidden
              className="label-hidden"
              htmlFor="email"
              aria-hidden="true"
            >
              Title
            </label>
            <Input type="text" placeholder="Enter email" />
            <label
              aria-hidden="true"
              hidden
              className="label-hidden"
              htmlFor="password"
            >
              Password
            </label>
            <Input type="password" placeholder="Enter password" />
            <SubmitButton type="submit" value="Register" />
          </StyledForm>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Register;
