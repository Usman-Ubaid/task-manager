import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { useTask } from "../hooks/TaskContext";

const Important = () => {
  const { tasks } = useTask();

  const priorityTasks =
    tasks &&
    tasks.filter(
      (task) => task.priority === "High" && task.completed === false
    );

  return (
    <Layout>
      <Tasks title="Important" tasks={priorityTasks} />
    </Layout>
  );
};

export default Important;
