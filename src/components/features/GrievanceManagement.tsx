import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Send, ArrowLeft, AlertTriangle } from 'lucide-react';

interface Grievance {
  id: string;
  content: string;
  status: 'pending' | 'processing' | 'resolved';
  response?: string;
  timestamp: Date;
}

export default function GrievanceManagement() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [grievances, setGrievances] = useState<Grievance[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // TODO: Integrate with backend service
    // [Backend Integration Point]: Connect to grievance management service
    // The backend should:
    // 1. Store the grievance in a secure database
    // 2. Generate a unique tracking ID
    // 3. Notify relevant authorities
    const newGrievance: Grievance = {
      id: `GR${Math.random().toString(36).substr(2, 9)}`,
      content: message,
      status: 'pending',
      timestamp: new Date()
    };

    setGrievances(prev => [newGrievance, ...prev]);
    setMessage('');

    // Mock response
    setTimeout(() => {
      setGrievances(prev => prev.map(g => 
        g.id === newGrievance.id
          ? {
              ...g,
              status: 'processing',
              response: 'Your complaint has been received. Our student council will contact you shortly.'
            }
          : g
      ));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-white hover:text-blue-400 flex items-center"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Grievance Management</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Submit Grievance */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
              Submit Grievance
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your concern..."
                className="w-full h-40 bg-white/5 border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Grievance History */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Grievance History</h2>
            <div className="space-y-4">
              {grievances.map((grievance) => (
                <div key={grievance.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-blue-200">ID: {grievance.id}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      grievance.status === 'pending' ? 'bg-yellow-500/20 text-yellow-200' :
                      grievance.status === 'processing' ? 'bg-blue-500/20 text-blue-200' :
                      'bg-green-500/20 text-green-200'
                    }`}>
                      {grievance.status.charAt(0).toUpperCase() + grievance.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-white mb-2">{grievance.content}</p>
                  {grievance.response && (
                    <div className="bg-blue-600/20 rounded p-3 mt-2">
                      <p className="text-blue-200">{grievance.response}</p>
                    </div>
                  )}
                  <span className="text-sm text-blue-200">
                    {grievance.timestamp.toLocaleString()}
                  </span>
                </div>
              ))}
              {grievances.length === 0 && (
                <p className="text-blue-200 text-center py-4">No grievances submitted yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}