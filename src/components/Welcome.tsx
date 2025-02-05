import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Welcome() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <Brain className="mx-auto h-24 w-24 text-blue-400 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Smart AI Academy
        </h1>
        {user && (
          <p className="text-xl text-blue-200">
            Welcome, {user.name}!
          </p>
        )}
        <div className="animate-pulse text-blue-300">Loading your personalized experience...</div>
      </div>
    </div>
  );
}