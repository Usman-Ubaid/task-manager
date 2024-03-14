import { SubmitButton } from "../../styles/Input";
import { useEffect, useRef, useState } from "react";
import { editTask, getSingleTask } from "../../services/taskApi";
import ContentStyle from "../../styles/modalContent/ContentStyle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setToastMessage } from "../../utils/toastMessage";

type EditContent = {
  taskId: number;
};

type SelectedTaskState = {
  title: string;
  description: string;
  formattedDate: string;
};

function EditContent({ taskId }: EditContent) {
  const [selectedTask, setSelectedTask] = useState<SelectedTaskState>({
    title: "",
    description: "",
    formattedDate: "",
  });

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLTextAreaElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (titleInputRef.current) {
      setSelectedTask((prevState) => ({
        ...prevState,
        title: titleInputRef.current!.value,
      }));
    }
    if (dateInputRef.current) {
      setSelectedTask((prevState) => ({
        ...prevState,
        date: dateInputRef.current!.value,
      }));
    }
  };

  const handleTextChange = () => {
    if (descInputRef.current) {
      setSelectedTask((prevState) => ({
        ...prevState,
        description: descInputRef.current!.value,
      }));
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      const result = await getSingleTask(taskId);
      const { title, description, dueDate } = result.task;
      const formattedDate = new Date(dueDate).toISOString().split("T")[0];
      setSelectedTask({ title, description, formattedDate });
    };
    fetchTask();
  }, [taskId]);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.value = selectedTask?.title || "";
    }
    if (descInputRef.current) {
      descInputRef.current.value = selectedTask?.description || "";
    }
    if (dateInputRef.current) {
      dateInputRef.current.value = selectedTask?.formattedDate || "";
    }
  }, [
    selectedTask?.title,
    selectedTask?.description,
    selectedTask?.formattedDate,
  ]);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: number) =>
      editTask(id, {
        title: selectedTask.title,
        description: selectedTask.description,
        dueDate: selectedTask.formattedDate,
      }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setToastMessage("success", "Task Updated ");
    },
    onError() {
      setToastMessage("error", "Failed to update the task");
    },
  });

  const handleEditSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(taskId);
  };
  return (
    <ContentStyle onSubmit={handleEditSubmit}>
      <h2>Update a Task</h2>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          ref={titleInputRef}
          onChange={handleInputChange}
          type="text"
          id="title"
          placeholder="e.g. Complete an assignment"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          ref={descInputRef}
          onChange={handleTextChange}
          name="description"
          id="description"
          rows={4}
          placeholder="Describe the task"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          ref={dateInputRef}
          onChange={handleInputChange}
          type="date"
          id="date"
        />
      </div>

      <div className="submit-btn ">
        <SubmitButton type="submit" value="Update Task" $isWidth={true} />
      </div>
    </ContentStyle>
  );
}

export default EditContent;
