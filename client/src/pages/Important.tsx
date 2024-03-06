import Layout from "../components/common/Layout";
import Tasks from "../components/tasks/Tasks";
import { StyledTaskContainer } from "../styles/tasks/TaskContainer";

const Important = () => {
  return (
    <Layout>
      <StyledTaskContainer>
        <Tasks title="Important" />
      </StyledTaskContainer>
    </Layout>
  );
};

export default Important;
