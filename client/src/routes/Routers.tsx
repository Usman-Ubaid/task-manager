import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import Dashboard from "../pages/AllTasks";
import Important from "../pages/Important";
import Completed from "../pages/Completed";

const Routers = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/important" element={<Important />} />
        <Route path="/completed" element={<Completed />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
