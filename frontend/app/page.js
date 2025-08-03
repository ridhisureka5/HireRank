'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center fixed top-0 z-50">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">HireRank</h1>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition">Dashboard</Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-32 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
          AI Resume Evaluator & Job Matcher
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-8">
          Upload your resume to get instant feedback and discover job opportunities tailored for your skills and experience.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-lg transition-all duration-200">
            Upload Resume
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-gray-800">Why HireRank?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Smart Resume Evaluation</h4>
              <p className="text-gray-600 text-sm">
                Get AI-powered suggestions to improve formatting, wording, and relevance.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Job Matching</h4>
              <p className="text-gray-600 text-sm">
                Receive personalized job listings based on your resume’s strengths and skills.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">ATS Optimization</h4>
              <p className="text-gray-600 text-sm">
                Ensure your resume passes Applicant Tracking Systems used by top recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-auto">
        &copy; 2025 <span className="font-medium">HireRank</span>. All rights reserved.
      </footer>
    </div>
  );
}
