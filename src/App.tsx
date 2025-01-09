import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import ErrorBoundary from "./utils/error/error-boundary";
import Shop from "./routes/shop.component";
import SignInForm from "./pages/singin/SignIn";
import SignUpForm from "./pages/signup/SingUp";
import Checkout from "@/pages/checkout"

import { checkUserSession } from "@/store";

import "./App.css";
import Navigation from "./routes/navigation";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}/>
            <Route path="category/*" element={<Shop />} />
            <Route path="signin" element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
