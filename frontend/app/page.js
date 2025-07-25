"use client";
// app/page.js

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">HireRank</h1>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          AI Resume Evaluator & Job Matcher
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mb-6">
          Upload your resume to get instant feedback and discover job opportunities tailored for your skills and experience.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Upload Resume
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Why HireRank?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2 text-blue-600">Smart Resume Evaluation</h4>
              <p className="text-gray-600">Get AI-powered suggestions to improve formatting, wording, and relevance.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2 text-blue-600">Job Matching</h4>
              <p className="text-gray-600">Receive personalized job listings based on your resume’s strengths and skills.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-2 text-blue-600">ATS Optimization</h4>
              <p className="text-gray-600">Ensure your resume passes Applicant Tracking Systems used by top recruiters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t mt-12">
        &copy; 2025 HireRank. All rights reserved.
      </footer>
    </div>
  );
}
