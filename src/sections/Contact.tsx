export default function Contact() {
  return (
    <section
      id="contact"
      className="section min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Feel free to reach out to me through any of these channels
        </p>

        <div className="space-y-8">
          {/* Email Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Email</h3>
            <a
              href="mailto:your-email@example.com"
              className="text-indigo-600 hover:text-indigo-800 font-medium text-lg transition-colors"
            >
              jesseekoh@outlook.com
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Connect with me
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://github.com/jesseekoh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com/in/jesseekoh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-sky-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-700"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  Twitter
                </span>
              </a>

              <a
                href="https://instagram.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-2 group-hover:from-purple-500 group-hover:to-pink-600 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
