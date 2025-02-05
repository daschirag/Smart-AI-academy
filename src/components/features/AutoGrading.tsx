import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Upload, FileText } from 'lucide-react';

interface GradedPaper {
  type: 'objective' | 'theory';
  score: number;
  feedback: string;
}

export default function AutoGrading() {
  const navigate = useNavigate();
  const [gradedPapers, setGradedPapers] = useState<GradedPaper[]>([]);
  const [selectedPaper, setSelectedPaper] = useState<GradedPaper | null>(null);

  const handleFileUpload = (type: 'objective' | 'theory') => {
    // TODO: Integrate with backend AI service
    // [Backend Integration Point]: Connect to AI service for paper grading
    // The backend should:
    // 1. Process the uploaded file
    // 2. Analyze and grade the content
    // 3. Return structured feedback and scores
    
    // Mock response for demonstration
    const mockGradedPaper: GradedPaper = {
      type,
      score: Math.floor(Math.random() * 31) + 70, // Random score between 70-100
      feedback: "This is automated feedback for your paper. [Backend AI integration required]"
    };

    setGradedPapers(prev => [...prev, mockGradedPaper]);
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
            <h1 className="text-2xl font-bold text-white">AI Auto-Grading</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Upload Papers</h2>
              <div className="space-y-4">
                <div
                  onClick={() => handleFileUpload('objective')}
                  className="border-2 border-dashed border-blue-500/30 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <Upload className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-200">Drop Objective Paper</p>
                </div>
                <div
                  onClick={() => handleFileUpload('theory')}
                  className="border-2 border-dashed border-blue-500/30 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <Upload className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-200">Drop Theory Paper</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Graded Papers</h2>
              <div className="space-y-4">
                {gradedPapers.map((paper, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPaper(paper)}
                    className="bg-white/5 rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-400 mr-2" />
                        <span className="text-white capitalize">{paper.type} Paper</span>
                      </div>
                      <span className="text-blue-400 font-semibold">Score: {paper.score}</span>
                    </div>
                  </div>
                ))}
                {gradedPapers.length === 0 && (
                  <p className="text-blue-200 text-center py-4">No graded papers yet</p>
                )}
              </div>
            </div>

            {selectedPaper && (
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Detailed Feedback</h3>
                <p className="text-blue-200">{selectedPaper.feedback}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}