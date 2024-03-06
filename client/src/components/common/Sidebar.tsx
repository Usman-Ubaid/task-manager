import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { FaListCheck, FaCheck } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const menu = [
    {
      id: 1,
      title: "All Tasks",
      icon: <MdHome />,
      link: "/",
    },
    {
      id: 2,
      title: "Important",
      icon: <FaListCheck />,
      link: "/important",
    },
    {
      id: 3,
      title: "Completed",
      icon: <FaCheck />,
      link: "/completed",
    },
    {
      id: 4,
      title: "Do it now",
      icon: <RiTodoLine />,
      link: "/incomplete",
    },
  ];
  return (
    <StyledSidebar>
      <h2>Usman Ubaid</h2>
      <div>
        <ul className="nav-items">
          {menu.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${pathname === item.link ? "active" : ""}`}
            >
              <span>{item.icon}</span>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="signout">
        <FaSignOutAlt className="icon" />
        <button>Sign Out</button>
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  position: relative;
  width: 15rem;
  background-color: #212121;
  border: 2px solid rgba(249, 249, 249, 0.08);
  border-radius: 1rem;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: rgb(108, 121, 131);

  h2 {
    text-align: center;
    margin: 30px 0;
  }

  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    cursor: pointer;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: rgba(249, 249, 249, 0.03);
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: #27ae60;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
      line-height: 0;
    }

    span {
      display: flex;
      align-items: center;
      color: rgba(249, 249, 249, 0.35);
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: rgba(249, 249, 249, 0.08);

    span,
    a {
      color: rgba(249, 249, 249, 0.75);
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }

  .signout {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 2rem 0;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.55s ease-in-out;
  }

  .signout button {
    color: #b2becd;
    background-color: inherit;
    cursor: pointer;
    font-size: inherit;
    border: none;
  }

  .signout .icon {
    color: #b2becd;
    margin-right: 20px;
    margin-left: 10px;
  }
`;

export default Sidebar;
