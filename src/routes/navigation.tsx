import { Outlet } from "react-router-dom";

import NavBar from "../components/navigation-bar";

const Navigation = () => {
  return (
    <>
      <div className="-z-100">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
