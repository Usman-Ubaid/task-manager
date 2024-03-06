import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLayout>
      <div>
        <Sidebar />
      </div>
      <div className="child-div">{children}</div>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  width: 100%;

  .child-div {
    width: 100%;
  }
`;

export default Layout;
