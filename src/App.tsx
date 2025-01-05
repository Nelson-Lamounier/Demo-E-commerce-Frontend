import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </>
  );
};

export default App;
