import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DonationPage from "./pages/DonationPage";
import DonationForm from "./pages/DonationFormPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonationPage />} />
        <Route path="/donație" element={<DonationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
