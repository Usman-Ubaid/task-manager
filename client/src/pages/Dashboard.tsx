import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import Layout from "../components/common/Layout";
import TaskItem from "../components/tasks/TaskItem";

const Dashboard = () => {
  const tasks = [
    {
      id: 1,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
    },
    {
      id: 2,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
    },
    {
      id: 3,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
    },
    {
      id: 4,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
    },
    {
      id: 5,
      title: "Watch a video",
      description: "This is to learn something from tutorial",
      dueDate: "06/04/2024",
    },
  ];
  return (
    <Layout>
      <StyledDashboard>
        <h1>All Tasks</h1>
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
            />
          ))}
        </div>
      </StyledDashboard>
    </Layout>
  );
};

const StyledDashboard = styled.div`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: #212121;
  border: 2px solid rgba(249, 249, 249, 0.08);
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .btn-rounded {
    position: fixed;
    top: 4.9rem;
    right: 5.1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    background-color: #252525;
    border: 2px solid rgba(249, 249, 249, 0.08);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    color: #b2becd;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      top: 3rem;
      right: 3.5rem;
    }
  }

  .tasks {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
    flex-wrap: wrap;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: #6fcf97;
      border-radius: 0.5rem;
    }
  }

  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 16rem;
    color: #b2becd;
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed #2a2e35;
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: #2a2e35;
      color: #f8f8f8;
    }
  }
`;

export default Dashboard;
