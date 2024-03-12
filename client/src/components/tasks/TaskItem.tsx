import styled from "styled-components";

type TaskItemProps = {
  title: string;
  description: string;
  date: string;
  priority: string;
};

function TaskItem({ title, description, date, priority }: TaskItemProps) {
  const formatDate = new Date(date);
  const day = formatDate.getDay();
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();

  return (
    <TaskItemStyled>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="date">{`${day}/${month}/${year}`}</p>
      <p>Priority: {priority}</p>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: rgba(249, 249, 249, 0.08);
  box-shadow: 1px 7px 12px rgba(8, 18, 69, 0.1);
  border: 2px solid rgba(249, 249, 249, 0.08);

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: #b2becd;
      }
    }

    .edit {
      margin-left: auto;
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
