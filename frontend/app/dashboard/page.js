'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    // Simulated AI response
    setTimeout(() => {
      const mockResult = {
        atsScore: 82,
        grammarScore: 91,
        formatting: 'Strong formatting with consistent bullet points.',
        suggestions: [
          'Use stronger action verbs.',
          'Optimize keywords for your target job roles.',
        ],
      };

      localStorage.setItem('resumeResult', JSON.stringify(mockResult));
      setUploading(false);
      router.push('/result');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Resume</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full border border-gray-300 p-2 rounded-lg"
          />
          <button
            type="submit"
            disabled={uploading || !file}
            className={`w-full py-2 rounded-lg text-white font-semibold ${
              uploading || !file
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Upload Resume'}
          </button>
        </form>
      </div>
    </div>
  );
}
''