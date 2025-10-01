export default function Profile() {
  return (
    <section
      id="profile"
      className="section min-h-screen flex flex-col items-center justify-center p-4 bg-white"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
          My Profile
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Skills, experience, and projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Skills
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">TypeScript</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">React & Next.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">HTML & CSS / Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Responsive Design</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Experience
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Software Engineer Intern
                </h4>
                <p className="text-indigo-600 font-medium">
                  Solve Station • Aug. 2025 - Present
                </p>
                <p className="text-gray-600 mt-2">
                  Developing responsive web applications using React and
                  TypeScript.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Web Developer
                </h4>
                <p className="text-indigo-600 font-medium">
                  Digital Agency • 2020 - 2022
                </p>
                <p className="text-gray-600 mt-2">
                  Created client websites with focus on performance and user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                E-commerce Platform
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">
                A fully responsive online store with shopping cart
                functionality.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Stripe
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://example.com/ecommerce-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/your-username/ecommerce-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Attendance tracking app
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">
                A fully responsive React app for lecturers and students to track
                class attendance.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Firebase
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://attendance-app-frontend-09ja.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jesseekoh/attendance-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Portfolio Website
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Showcase of design and development projects.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://jesseekoh.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/jesseekoh/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
