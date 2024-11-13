import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import IndividuPage from "./pages/IndividuPage";
import KomunitasPage from "./pages/KomunitasPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/individu" element={<IndividuPage />} />
      <Route path="/komunitas" element={<KomunitasPage />} />
    </Routes>
  </Router>
);

export default App;
