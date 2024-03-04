import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  padding: 8px;
  color: white;
  flex: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(85, 85, 85, 0.3);
  }

  &.active {
    background-color: #555;
  }
`;

export default StyledLink;
