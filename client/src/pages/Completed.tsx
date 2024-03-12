import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { useTask } from "../hooks/TaskContext";

const Completed = () => {
  const { tasks } = useTask();

  const completedTasks =
    tasks && tasks.filter((task) => task.completed === true);
  return (
    <Layout>
      <Tasks title="Completed" tasks={completedTasks} />
    </Layout>
  );
};

export default Completed;
