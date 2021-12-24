import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Layout from "../containers/Layout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NewPassword from "../pages/NewPassword"
import CreateAccount from "../pages/CreateAccount"
import Orders from "../pages/Orders"
import Checkout from "../pages/Checkout"
import SendEmail from "../pages/SendEmail"
import MyAccount from "../pages/MyAccount"

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import "../App.css";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route exact path="/send-email" element={< SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
