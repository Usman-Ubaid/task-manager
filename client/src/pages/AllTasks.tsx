import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { useTask } from "../hooks/TaskContext";

const Dashboard = () => {
  const { tasks } = useTask();

  const inCompleteTasks =
    tasks && tasks.filter((task) => task.completed === false);

  return (
    <Layout>
      <Tasks title="All Tasks" tasks={inCompleteTasks} />
    </Layout>
  );
};

export default Dashboard;
