import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Youtube, ExternalLink } from 'lucide-react';

const careerVideos = [
  {
    title: 'How to Prepare for Technical Interviews',
    thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=300&h=200',
    link: 'https://www.youtube.com/watch?v=example1',
    category: 'Interview Preparation'
  },
  {
    title: 'Career Paths in Software Development',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300&h=200',
    link: 'https://www.youtube.com/watch?v=example2',
    category: 'Career Guidance'
  },
  {
    title: 'Resume Building Workshop',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300&h=200',
    link: 'https://www.youtube.com/watch?v=example3',
    category: 'Resume Tips'
  },
  {
    title: 'Industry Expert Talk: Future of Tech',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=300&h=200',
    link: 'https://www.youtube.com/watch?v=example4',
    category: 'Industry Insights'
  }
];

export default function CareerLinks() {
  const navigate = useNavigate();

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
            <h1 className="text-2xl font-bold text-white">Career Resources</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Career Videos */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Youtube className="h-6 w-6 text-red-400 mr-2" />
              Career Guidance Videos
            </h2>
            <div className="space-y-6">
              {careerVideos.map((video, index) => (
                <div key={index} className="flex bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-48 h-32 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                        <span className="text-sm text-blue-200">{video.category}</span>
                      </div>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}