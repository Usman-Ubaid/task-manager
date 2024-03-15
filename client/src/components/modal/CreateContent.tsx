import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitButton } from "../../styles/Input";
import Input from "../form/Input";
import useForm, { FormValues } from "../../hooks/useForm";
import { setToastMessage } from "../../utils/toastMessage";
import { addTaskApi } from "../../services/taskApi";
import ContentStyle from "../../styles/modalContent/ContentStyle";

type ContentProps = {
  isClose: () => void;
};

function CreateContent({ isClose }: ContentProps) {
  const { formData, handleInputChange } = useForm({
    title: "",
    description: "",
    date: "",
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTask: FormValues) => addTaskApi(newTask),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setToastMessage("success", "Task Added Successfully");
      isClose();
    },
    onError() {
      setToastMessage("error", "Error adding the task");
    },
  });

  const handleTaskSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      title: formData.title,
      description: formData.description,
      dueDate: formData.date,
    };
    try {
      mutate(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentStyle onSubmit={handleTaskSubmit}>
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
    </ContentStyle>
  );
}

export default CreateContent;
