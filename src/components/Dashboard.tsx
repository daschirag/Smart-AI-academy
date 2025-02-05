import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, BookOpen, CheckSquare, MessageSquare, AlertTriangle, Link } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const features = [
  {
    icon: BookOpen,
    title: 'Adaptive Learning System',
    description: 'Personalized learning paths and AI-powered study recommendations',
    path: '/adaptive-learning',
  },
  {
    icon: CheckSquare,
    title: 'AI Auto-Grading',
    description: 'Automated assessment and instant feedback',
    path: '/auto-grading',
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Mentor',
    description: 'Get instant help from your AI study companion',
    path: '/chat-mentor',
  },
  {
    icon: AlertTriangle,
    title: 'Grievance Management',
    description: 'Report and track issues securely',
    path: '/grievance',
  },
  {
    icon: Link,
    title: 'Career Links',
    description: 'Explore career opportunities and guidance',
    path: '/career-links',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <nav className="bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-white font-bold">Smart AI Academy</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate('/profile')}
                className="text-white hover:text-blue-400"
              >
                {user?.name}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}