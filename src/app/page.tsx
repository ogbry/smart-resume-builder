import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Resume Builder
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/examples" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Examples
              </Link>
              <Link href="/builder">
                <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto pt-20 pb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              AI-Powered Recommendations
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Build Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Resume in Minutes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Create professional, ATS-friendly resumes with intelligent suggestions for skills, achievements, and content. No external APIs required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/builder">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Start Building Free
                </button>
              </Link>
              <Link href="/examples">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-sm">
                  View Examples
                </button>
              </Link>
            </div>
          </div>

          {/* Visual Preview Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">Live Preview</span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="h-8 bg-blue-600 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              Professional features to help you stand out
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart AI Suggestions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent recommendations for skills, achievements, and bullet points tailored to your target role and experience level.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3 Professional Templates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from Professional, Executive, and Creative designs. Switch between templates anytime with real-time preview.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Privacy Focused
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All your data stays in your browser. No accounts required, no servers, no data collection. Export as PDF anytime.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ATS-Friendly Format
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All templates are optimized for Applicant Tracking Systems to ensure your resume gets past automated screening.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-Time Preview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See your changes instantly with live preview. What you see is exactly what you'll get in the PDF export.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visual indicators show your completion progress. Know exactly what sections need attention before exporting.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to your perfect resume
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fill In Your Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Use our intuitive section-based interface to add your personal info, work experience, skills, projects, hobbies, and references. Navigate easily between sections with visual progress tracking.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get AI-Powered Suggestions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive intelligent recommendations for missing skills, impactful bullet points, and relevant hobbies based on your target role and experience level. Apply suggestions with one click.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Choose Template & Export
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Select from 3 professional templates, preview your resume in real-time, and export as a high-quality PDF when you're satisfied. Switch templates anytime without losing data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto py-24 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Resume?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands creating professional resumes in minutes
            </p>
            <Link href="/builder">
              <button className="px-10 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Building Free
              </button>
            </Link>
            <p className="text-sm text-blue-200 mt-6">
              No credit card required • No account needed • 100% free
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Resume Builder</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-600">Built with Next.js, TypeScript, and Tailwind CSS</p>
              <p className="text-sm text-gray-500 mt-1">No AI APIs • Privacy First • Open Source Ready</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
