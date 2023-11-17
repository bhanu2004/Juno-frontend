import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Navigation from './components/navigation/Navigation';
import CommingSoon from './commingSoon/CommingSoon';
import HomePage from './homepage/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<CommingSoon />} />
        <Route path="/onboarding" element={<CommingSoon />} />
        <Route path="/monitoring" element={<Dashboard />} />
        <Route path="/flagging" element={<CommingSoon />} />
        <Route path="/source-of-income" element={<CommingSoon />} />
        <Route path="/uar" element={<CommingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
