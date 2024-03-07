import { FaPlus } from "react-icons/fa";
import TaskItem from "./TaskItem";
import { useState } from "react";
import Modal from "../modal/Modal";
import Content from "../modal/Content";
import { StyledTaskContainer } from "../../styles/tasks/TaskContainer";

type TaskProps = {
  title: string;
};

const Tasks = ({ title }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const tasks = [
    {
      id: 1,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
      priority: "Low",
    },
    {
      id: 2,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
      priority: "Low",
    },
    {
      id: 3,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
      priority: "High",
    },
    {
      id: 4,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
      priority: "Medium",
    },
    {
      id: 5,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
      priority: "Low",
    },
  ];
  return (
    <StyledTaskContainer>
      {isOpen && <Modal isClose={closeModal} content={<Content />} />}
      <h1>{title}</h1>
      <button onClick={openModal} className="btn-rounded">
        <FaPlus />
      </button>
      <div className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.dueDate}
            priority={task.priority}
          />
        ))}
      </div>
    </StyledTaskContainer>
  );
};

export default Tasks;
