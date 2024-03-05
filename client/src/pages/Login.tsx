import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledWrapper from "../styles/common/Wrapper";
import StyledLink from "../styles/common/Link";
import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";
import useForm, { FormValues } from "../hooks/useForm";

const Login = () => {
  const { formData, handleInputChange } = useForm({ email: "", password: "" });

  const handleLoginSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginUser = async (formData: FormValues) => {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        return response.json();
      };

      const result = loginUser(formData);
      console.log(result);
    } catch (error) {
      console.log(error);
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
