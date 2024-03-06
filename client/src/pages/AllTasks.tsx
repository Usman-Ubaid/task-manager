import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { StyledTaskContainer } from "../styles/tasks/TaskContainer";

const Dashboard = () => {
  return (
    <Layout>
      <StyledTaskContainer>
        <Tasks title="All Tasks" />
      </StyledTaskContainer>
    </Layout>
  );
};

export default Dashboard;
