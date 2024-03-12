import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { useTask } from "../hooks/TaskContext";

const Dashboard = () => {
  const { tasks } = useTask();

  return (
    <Layout>
      <Tasks title="All Tasks" tasks={tasks} />
    </Layout>
  );
};

export default Dashboard;
