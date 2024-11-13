import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import LingkunganEvent from "./pages/lingkunganEvent";
import LandingPage from "./pages/landingPage";
import ProfileDashboard from "./pages/profileDashboard";
import './index.css';

const App = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/lingkungan" element={<LingkunganEvent />} />
      <Route path="/profile" element={<ProfileDashboard />} />
    </Routes>
  </Router>
);

export default App;