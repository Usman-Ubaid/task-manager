import { FaPlus } from "react-icons/fa";
import TaskItem from "./TaskItem";

type TaskProps = {
  title: string;
};

const Tasks = ({ title }: TaskProps) => {
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
    <>
      <h1>{title}</h1>
      <button className="btn-rounded">
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
    </>
  );
};

export default Tasks;
