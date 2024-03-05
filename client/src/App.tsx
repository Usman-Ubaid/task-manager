import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "./routes/Routers";
import "./App.css";

function App() {
  return (
    <div>
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
