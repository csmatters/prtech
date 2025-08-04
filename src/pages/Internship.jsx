import React from 'react'
import { Helmet } from "react-helmet";

function Internship() {
  return (
    <>
      <Helmet>
        <title>Intership - PR Tech</title>
      </Helmet>
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-16 px-4">
  <div className="container mx-auto max-w-7xl">
    
    {/* Hero */}
    <div className="text-center mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Internship Program</h1>
      <p className="text-lg sm:text-xl text-gray-300">
        Gain real-world experience, build strong skills, and join a team that thrives on innovation.
      </p>
    </div>

    {/* Overview */}
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
      <p className="text-gray-300 leading-relaxed">
        Our internship program is designed to bridge the gap between academic learning and professional experience.
        Interns will be part of a dynamic environment, contribute to real projects, and gain mentorship from industry experts.
      </p>
    </div>

    {/* Why Join */}
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Work on live projects with modern tech stacks.</li>
        <li>1-on-1 mentorship from experienced professionals.</li>
        <li>Flexible remote opportunities available.</li>
        <li>Get an internship certificate and Letter of Recommendation.</li>
        <li>Opportunity for full-time placement post-internship.</li>
      </ul>
    </div>

    {/* Roles */}
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Internship Roles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          "Frontend Developer (React.js)",
          "Backend Developer (Node.js + Express)",
          "UI/UX Designer",
          "WordPress Developer",
          "Digital Marketing Intern",
          "Content Writing Intern"
        ].map((role, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">{role}</h3>
            <p className="text-sm text-gray-400">Contribute to live projects and build your professional skills in this role.</p>
          </div>
        ))}
      </div>
    </div>

    {/* Eligibility & Duration */}
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Eligibility & Duration</h2>
      <p className="text-gray-300 leading-relaxed mb-2">
        Open to students and fresh graduates from technical and creative fields.
      </p>
      <p className="text-gray-300 leading-relaxed">
        <strong>Duration:</strong> 1 to 3 months (extendable based on performance).
      </p>
    </div>

    {/* Apply Section */}
    <div className="text-center mt-16">
      <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
      <p className="text-gray-300 mb-6">Submit your resume and portfolio to apply for the internship program.</p>
      <a
        href="https://forms.gle/XiafmMBfr3EjsAw27" target='_blank'
        className="inline-block bg-gray-900 text-white font-medium py-3 px-6 rounded-xl transition"
      >
        Apply Now
      </a>
    </div>

  </div>
</section>

    </>
    
  )
}

export default Internship