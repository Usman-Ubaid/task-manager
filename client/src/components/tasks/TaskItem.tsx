import styled from "styled-components";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask, editTask } from "../../services/taskApi";
import { setToastMessage } from "../../utils/toastMessage";

type TaskItemProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: string;
  completed: boolean;
};

function TaskItem({
  id,
  title,
  description,
  date,
  priority,
  completed,
}: TaskItemProps) {
  const formatDate = new Date(date);
  const day = formatDate.getDay();
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();

  const queryClient = useQueryClient();

  const { mutate: mutateEdit } = useMutation({
    mutationFn: (id: number) => editTask(id, completed),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setToastMessage("success", "Task Updated ");
    },
    onError() {
      setToastMessage("error", "Failed to update the task");
    },
  });

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setToastMessage("success", "Task Deleted");
    },
    onError() {
      setToastMessage("error", "Failed to delete the task");
    },
  });

  const handleTaskCompletion = () => {
    mutateEdit(id);
  };

  const handleDeleteTask = () => {
    mutateDelete(id);
  };

  return (
    <TaskItemStyled>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="date">{`${day}/${month}/${year}`}</p>
      <p>Priority: {priority}</p>
      <div className="task-footer">
        <button
          onClick={handleTaskCompletion}
          className={completed ? "completed" : "incomplete"}
        >
          {completed ? "Completed" : "InComplete"}
        </button>
        <div className="icons-group">
          <MdEditDocument className="icon" />
          <MdDelete onClick={handleDeleteTask} className="icon" />
        </div>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  border-radius: 8px;
  background-color: rgba(249, 249, 249, 0.08);
  box-shadow: 1px 7px 12px rgba(8, 18, 69, 0.1);
  border: 2px solid rgba(249, 249, 249, 0.08);
  width: 300px;
  padding: 14px;
  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .date {
    margin-top: auto;
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .description {
    width: 250px;
    height: 250px;
  }

  .task-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;
    }

    .icons-group {
      font-size: 1.6rem;

      .icon {
        cursor: pointer;
      }

      .icon:first-child {
        margin-right: 10px;
      }
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #fe6854;
      border-radius: 30px;
    }

    .completed {
      background: #27ae60 !important;
    }
  }
`;

export default TaskItem;
