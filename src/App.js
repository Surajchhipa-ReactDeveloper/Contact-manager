import { React, Suspense } from "react";
// import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register";
import UserPage from "./Components/UserDatilsPage/UserPage";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" name="Name" element={<Login />} />
            <Route path="/register" name="Name" element={<Register />} />
            <Route path="/user" name="User" element={<UserPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
