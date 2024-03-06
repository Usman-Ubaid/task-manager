import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { StyledTaskContainer } from "../styles/tasks/TaskContainer";

const Completed = () => {
  return (
    <Layout>
      <StyledTaskContainer>
        <Tasks title="Completed" />
      </StyledTaskContainer>
    </Layout>
  );
};

export default Completed;
