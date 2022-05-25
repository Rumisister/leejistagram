import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginHayoung from "./pages/hayoung/Login/Login";
import MainHayoung from "./pages/hayoung/Main/Main";
import SignupHayoung from "./pages/hayoung/Login/Signup/Signup";
import AddFeedHayoung from "./pages/hayoung/Main/AddFeed/AddFeed";

import App from "./pages/App/App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/login-hayoung" element={<LoginHayoung />} />
        <Route path="/main-hayoung" element={<MainHayoung />} />
        <Route path="/signup-hayoung" element={<SignupHayoung />} />
        <Route path="/addfeed-hayoung" element={<AddFeedHayoung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
