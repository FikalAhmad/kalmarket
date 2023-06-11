import "./App.css";
import "./style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ExperimentPage from "./pages/ExperimentPage";
import Slide from "./component/Slide";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/daftar" element={<RegisterPage />} />
          <Route path="/test" element={<ExperimentPage />} />
          <Route path="/slide" element={<Slide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
