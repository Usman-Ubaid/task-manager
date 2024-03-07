import styled from "styled-components";
import { SubmitButton } from "../../styles/Input";
import Input from "../form/Input";
import useForm from "../../hooks/useForm";
import { addTaskApi } from "../../services/taskApi";

function CreateContent() {
  const { formData, handleInputChange } = useForm({
    title: "",
    description: "",
    date: "",
  });

  const handleTaskSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await addTaskApi(formData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateContentStyled onSubmit={handleTaskSubmit}>
      <h2>Create a Task</h2>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <Input
          value={formData.title}
          onChange={handleInputChange}
          type="text"
          id="title"
          placeholder="e.g. Complete an assignment"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={formData.description}
          onChange={handleInputChange}
          name="description"
          id="description"
          rows={4}
          placeholder="Describe the task"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <Input
          value={formData.date}
          onChange={handleInputChange}
          type="date"
          id="date"
        />
      </div>

      <div className="submit-btn ">
        <SubmitButton type="submit" value="Create Task" $isWidth={true} />
      </div>
    </CreateContentStyled>
  );
}

const CreateContentStyled = styled.form`
  > h2 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: #dbe1e8;

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: #6c7983;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      resize: none;
      background-color: #131313;
      color: #b2becd;
      border-radius: 0.5rem;
      border: none;
      outline: none;
    }
  }
`;

export default CreateContent;
