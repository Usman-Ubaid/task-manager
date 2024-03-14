import { SubmitButton } from "../../styles/Input";
import { useEffect, useRef, useState } from "react";
import { editTask, getSingleTask } from "../../services/taskApi";
import ContentStyle from "../../styles/modalContent/ContentStyle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setToastMessage } from "../../utils/toastMessage";
import styled from "styled-components";

type EditContent = {
  taskId: number;
};

type SelectedTaskState = {
  title: string;
  description: string;
  formattedDate: string;
  priority: string;
};

function EditContent({ taskId }: EditContent) {
  const [selectedTask, setSelectedTask] = useState<SelectedTaskState>({
    title: "",
    description: "",
    formattedDate: "",
    priority: "",
  });
  const [isDropdown, setIsDropdown] = useState(false);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLTextAreaElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleDivChange = (option: string) => {
    if (dropdownRef.current) {
      setSelectedTask((prevState) => ({
        ...prevState,
        priority: option,
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
      const { title, description, dueDate, priority } = result.task;
      const formattedDate = new Date(dueDate).toISOString().split("T")[0];
      setSelectedTask({ title, description, formattedDate, priority });
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
    if (dropdownRef.current) {
      dropdownRef.current.innerText = selectedTask?.priority || "Choose One";
    }
  }, [
    selectedTask?.title,
    selectedTask?.description,
    selectedTask?.formattedDate,
    selectedTask?.priority,
  ]);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: number) =>
      editTask(id, {
        title: selectedTask.title,
        description: selectedTask.description,
        dueDate: selectedTask.formattedDate,
        priority: selectedTask.priority,
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

  const dropdownOptions = [
    { id: 1, select: "High" },
    { id: 2, select: "Medium" },
    { id: 3, select: "Low" },
  ];

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
      <div className="input-control">
        <label htmlFor="date">Priority</label>
        <DropDownStyle onClick={() => setIsDropdown(!isDropdown)}>
          <div ref={dropdownRef} className="dropdown-btn">
            {selectedTask.priority}
          </div>
          {isDropdown && (
            <div className="dropdown-content">
              {dropdownOptions.map((option) => (
                <div
                  className="dropdown-item"
                  key={option.id}
                  onClick={() => handleDivChange(option.select)}
                >
                  {option.select}
                </div>
              ))}
            </div>
          )}
        </DropDownStyle>
      </div>

      <div className="submit-btn">
        <SubmitButton type="submit" value="Update Task" $isWidth={true} />
      </div>
    </ContentStyle>
  );
}

const DropDownStyle = styled.div`
  width: 100%;

  .dropdown-btn {
    padding: 10px 15px;
    background-color: #131313;
    font-weight: bold;
    color: #333;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background-color: #131313;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    color: #333;
    font-weight: 500;
    color: #b2becd;
  }

  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(39, 39, 39, 0.347);
    }
  }
`;

export default EditContent;
