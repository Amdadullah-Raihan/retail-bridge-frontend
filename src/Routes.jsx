import {} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Entry from "./Entry";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";

const Routers = () => {
  const isAuth = true;
  return (
    <Routes>
      <Route
        path="/auth/login"
        element={!isAuth ? <Register /> : <Navigate to="/" />}
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
