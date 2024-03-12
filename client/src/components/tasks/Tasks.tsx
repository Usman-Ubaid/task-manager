import { FaPlus } from "react-icons/fa";
import TaskItem from "./TaskItem";
import { useState } from "react";
import Modal from "../modal/Modal";
import Content from "../modal/Content";
import { StyledTaskContainer } from "../../styles/tasks/TaskContainer";
import { Task } from "../../hooks/TaskContext";

type TaskProps = {
  title: string;
  tasks: Task[];
};

const Tasks = ({ title, tasks }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledTaskContainer>
      {isOpen && (
        <Modal
          isClose={closeModal}
          content={<Content isClose={closeModal} />}
        />
      )}
      <h1>{title}</h1>
      <button onClick={openModal} className="btn-rounded">
        <FaPlus />
      </button>
      <div className="tasks">
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <TaskItem
              key={task._id}
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
