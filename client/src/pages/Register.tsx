import Input from "../components/form/Input";
import StyledForm from "../styles/Form";
import { SubmitButton } from "../styles/Input";
import StyledContainer from "../styles/common/Container";
import StyledHeader from "../styles/common/Header";
import StyledLink from "../styles/common/Link";
import StyledWrapper from "../styles/common/Wrapper";
import useForm, { FormValues } from "../hooks/useForm";

const Register = () => {
  const { formData, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const registerUser = async (formData: FormValues) => {
        const response = await fetch(
          "http://localhost:5000/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: formData.username,
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Login failed");
        }

        return response.json();
      };

      const result = registerUser(formData);
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
