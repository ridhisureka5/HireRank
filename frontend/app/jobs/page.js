"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Jobs() {
  const [matchedJobs, setMatchedJobs] = useState([]);
   

  useEffect(() => {
    setMatchedJobs([
      {
        title: "Frontend Developer – React.js",
        company: "TechNova",
        location: "Remote",
        score: 92,
        link: "#",
      },
      {
        title: "Software Engineer – Backend",
        company: "CodeWave Inc.",
        location: "Bangalore, India",
        score: 88,
        link: "#",
      },
      {
        title: "AI Research Intern",
        company: "NeuroLabs",
        location: "San Francisco, CA",
        score: 84,
        link: "#",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🧠 Matched Job Opportunities
      </h2>

      <div className="space-y-4">
        {matchedJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-600">
                {job.company} — {job.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 font-semibold">
                Match Score: {job.score}%
              </p>
              <Link
                href={job.link}
                className="mt-2 inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Job
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}