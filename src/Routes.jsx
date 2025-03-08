import {} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Entry from "./Entry";
import Login from "./modules/auth/Login";
import Dashboard from "./modules/dashboard/Dashboard";

const Routers = () => {
  const isAuth = false;
  return (
    <Routes>
      <Route
        path="/auth/login"
        element={!isAuth ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={isAuth ? <Entry /> : <Navigate to="/auth/login" />}
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
