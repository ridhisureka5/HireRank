'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Result() {
  const router = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('resumeResult');

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        if (
          parsed &&
          typeof parsed.email === 'string' &&
          Array.isArray(parsed.skills) &&
          typeof parsed.atsScore === 'number'
        ) {
          setResult(parsed);
        } else {
          throw new Error('Incomplete result structure');
        }
      } catch (e) {
        console.error("❌ Invalid JSON in resumeResult:", stored, e);
        localStorage.removeItem('resumeResult');
        router.push('/dashboard');
      }
    } else {
      router.push('/dashboard');
    }
  }, [router]);

  if (!result) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-gray-600">
        Loading results...
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">📄 Resume Evaluation Results</h2>
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <p><strong>Name:</strong> {result.name || 'Not Available'}</p>
        <p><strong>Email:</strong> {result.email || 'Not Available'}</p>
        <p><strong>Phone:</strong> {result.phone || 'Not Available'}</p>
        <p><strong>Skills:</strong> {result.skills.join(', ')}</p>
        <p><strong>ATS Score:</strong> <span className="text-blue-600">{result.atsScore}%</span></p>

        {result.education?.length > 0 && (
          <div>
            <strong>Education:</strong>
            <ul className="list-disc list-inside">
              {result.education.map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        {result.experience?.length > 0 && (
          <div>
            <strong>Experience:</strong>
            <ul className="list-disc list-inside">
              {result.experience.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </div>
        )}

        {result.suggestions?.length > 0 && (
          <div>
            <strong>Suggestions:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {result.suggestions.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
