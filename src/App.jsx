import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import LingkunganEvent from "./pages/lingkunganEvent";
import BencanaEvent from "./pages/bencanaEvent";
import LandingPage from "./pages/landingPage";
import ProfileDashboard from "./pages/profileDashboard";
import './index.css';

const App = () => (
	<Router future={{}}>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/lingkungan" element={<LingkunganEvent />} />
			<Route path="/bencana" element={<BencanaEvent />} />
			<Route path="/profile" element={<ProfileDashboard />} />
		</Routes>
	</Router>
);

export default App;