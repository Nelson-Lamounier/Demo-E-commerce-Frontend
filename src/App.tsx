import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import ErrorBoundary from "./utils/error/error-boundary";

import "./App.css";

const App = () => {
  return (
    <>
    <ErrorBoundary>

      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </ErrorBoundary>
    </>
  );
};

export default App;
