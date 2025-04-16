import React, { useState } from 'react';
import { ChevronRight, Building2, X, Search } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selections, setSelections] = useState({
    industry: '',
    teamSize: '',
    features: [] as string[]
  });

  const industries = [
    'Manufacture, Auto & Energy',
    'Technology',
    'Media',
    'Small Business',
    'Financial Services',
    'Retail',
    'Public Sector',
    'Education',
    'Health & Life Sciences'
  ];

  const teamSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-250 employees',
    '251-1000 employees',
    '1001+ employees'
  ];

  const features = [
    'Team Communication',
    'File Sharing',
    'Video Meetings',
    'Workflow Automation',
    'External Collaboration',
    'Security & Compliance',
    'Integration with Tools'
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = () => {
    console.log('Selections:', selections);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <img 
                src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg" 
                alt="Slack" 
                className="h-7"
              />
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-1 text-gray-700 hover:text-[#541554] cursor-pointer">
                  Features
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
                <div className="flex items-center gap-1 text-gray-700 hover:text-[#541554] cursor-pointer">
                  Solutions
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
                <div className="text-gray-700 hover:text-[#541554] cursor-pointer">
                  Enterprise
                </div>
                <div className="flex items-center gap-1 text-gray-700 hover:text-[#541554] cursor-pointer">
                  Resources
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
                <div className="text-gray-700 hover:text-[#541554] cursor-pointer">
                  Pricing
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-[#541554] font-medium">
                Sign in
              </button>
              <button className="hidden sm:block text-[#541554] font-semibold px-4 py-1 hover:underline">
                TALK TO SALES
              </button>
              <button className="bg-[#541554] text-white px-4 py-1 rounded font-semibold hover:bg-[#4A154B]">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Where <span className="text-[#541554]">Work</span> Happens
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-[#541554] text-white px-6 py-3 rounded font-semibold">
              GET STARTED
            </button>
            <button className="border-2 border-[#541554] text-[#541554] px-6 py-3 rounded font-semibold flex items-center">
              FIND YOUR PLAN <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
          <p className="text-gray-600 mb-8">
            Slack is free to try <span className="text-black">for as long as you'd like</span>
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-[#541554] font-semibold text-xl hover:underline flex items-center justify-center gap-2 mx-auto"
          >
            Discover how Slack can help transform your work
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center opacity-60">
            <img src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_logos/logo-gm.png" alt="GM" className="h-8" />
            <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_logos/openai.png" alt="OpenAI" className="h-8" />
            <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_logos/target-logo.png" alt="Target" className="h-8" />
            <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_logos/paramount.png" alt="Paramount" className="h-8" />
            <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_logos/stripe.png" alt="Stripe" className="h-8" />
            <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_logos/ibm.png" alt="IBM" className="h-8" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl mx-4 transform animate-slideIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customize Your Slack Experience</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Industry Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select your industry
                </label>
                <select
                  value={selections.industry}
                  onChange={(e) => setSelections(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#541554] focus:border-transparent"
                >
                  <option value="">Choose an industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Team Size Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team size
                </label>
                <select
                  value={selections.teamSize}
                  onChange={(e) => setSelections(prev => ({ ...prev, teamSize: e.target.value }))}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#541554] focus:border-transparent"
                >
                  <option value="">Select team size</option>
                  {teamSizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Features Pills */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Key features you're interested in
                </label>
                <div className="flex flex-wrap gap-2">
                  {features.map(feature => (
                    <button
                      key={feature}
                      onClick={() => handleFeatureToggle(feature)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selections.features.includes(feature)
                          ? 'bg-[#541554] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#541554] text-white py-3 rounded-md font-semibold hover:bg-[#4A154B] transition-colors"
              >
                Let's see Slack in Action
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;