import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserFeed from '../pages/UserFeed';
import AdminDashboard from '../pages/AdminDashBoard';
import Login from '../pages/Login';
import { AuthProvider } from '../providers/AuthProvider';
import AuthGuard from '../components/AuthGuard';

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<AuthGuard />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserFeed />} />
          </Route>
          <Route path="*" element={<Login/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
