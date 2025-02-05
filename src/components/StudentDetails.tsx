import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const subjects = [
  'Data Structures',
  'Algorithms',
  'Database Management',
  'Web Development',
  'Machine Learning',
  'Computer Networks',
  'Operating Systems',
  'Software Engineering',
  'Artificial Intelligence',
  'Cloud Computing'
];

export default function StudentDetails() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    branch: '',
    subjects: [] as string[],
    dob: '',
    course: '',
    phone: '',
    ...user
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-blue-400 flex items-center"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back
          </button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="h-12 w-12 text-blue-400" />
            <h1 className="text-3xl font-bold text-white ml-4">Student Details</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-200">Branch</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-blue-500/30 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200">Date of Birth</label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-blue-500/30 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200">Course</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-blue-500/30 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-200">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md bg-white/5 border border-blue-500/30 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Select 7 Subjects</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(subject)}
                      onChange={(e) => {
                        const updatedSubjects = e.target.checked
                          ? [...formData.subjects, subject]
                          : formData.subjects.filter(s => s !== subject);
                        if (!e.target.checked || updatedSubjects.length <= 7) {
                          setFormData({ ...formData, subjects: updatedSubjects });
                        }
                      }}
                      disabled={!formData.subjects.includes(subject) && formData.subjects.length >= 7}
                      className="rounded border-blue-500/30 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-white">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}