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
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Next.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">TypeScript</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">JavaScript</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">HTML/CSS</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Tailwind CSS</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">UI/UX Design</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Node.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Python</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Flask</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Ruby on Rails</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">MongoDB</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">MySQL</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>
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
                A fullstack e-commerce solution with user authentication, 
                product management, and payment processing.
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
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  JWT
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://example.com/ecommerce-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/your-username/ecommerce-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Task Management App
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Fullstack task management application with real-time updates, 
                team collaboration, and project tracking features.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Ruby on Rails
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  PostgreSQL
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  WebSockets
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://example.com/task-management-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/your-username/task-management-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Social Media Analytics Dashboard
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">
                Fullstack analytics platform that aggregates social media data 
                and provides insights through interactive visualizations.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Python
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  Flask
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  MySQL
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  D3.js
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 mt-auto">
                <a
                  href="https://example.com/social-analytics-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/your-username/social-analytics-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
