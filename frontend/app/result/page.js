"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from "../layout";

export default function Result() {
  const router = useRouter();
  const [result, setResult] = useState(null);
  

  useEffect(() => {
    const stored = localStorage.getItem('resumeResult');
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center text-gray-600">
          Loading results...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[80vh] px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📄 Resume Evaluation Results</h2>

        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <p><strong>ATS Score:</strong> <span className="text-blue-600">{result.atsScore}%</span></p>
          <p><strong>Grammar Score:</strong> <span className="text-green-600">{result.grammarScore}%</span></p>
          <p><strong>Formatting:</strong> {result.formatting}</p>
          <div>
            <strong>Suggestions:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {result.suggestions.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

       <div className="mt-8 text-center">
      <button
        onClick={() => router.push('/jobs')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
      >
        🔍 View Matching Jobs
      </button>
    </div>
      </div>
    </Layout>
  );
}
