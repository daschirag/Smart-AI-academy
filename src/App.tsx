import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import StudentDetails from './components/StudentDetails';
import Dashboard from './components/Dashboard';
import AdaptiveLearning from './components/features/AdaptiveLearning';
import AutoGrading from './components/features/AutoGrading';
import ChatMentor from './components/features/ChatMentor';
import GrievanceManagement from './components/features/GrievanceManagement';
import CareerLinks from './components/features/CareerLinks';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adaptive-learning" element={<AdaptiveLearning />} />
          <Route path="/auto-grading" element={<AutoGrading />} />
          <Route path="/chat-mentor" element={<ChatMentor />} />
          <Route path="/grievance" element={<GrievanceManagement />} />
          <Route path="/career-links" element={<CareerLinks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;