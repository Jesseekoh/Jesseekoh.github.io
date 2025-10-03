import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Contact() {
  return (
    <section
      id="contact"
      className="section flex flex-col items-center justify-center p-4 bg-gray-50"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Feel free to reach out to me through any of these channels
        </p>

        <div className="space-y-8">
          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Connect with me
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:jesseekoh@outlook.com"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-icon lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  Email
                </span>
              </a>
              <a
                href="https://github.com/jesseekoh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
                  <GitHubIcon fontSize="large" />
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
                  <LinkedInIcon fontSize="large" />
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
                  <XIcon fontSize="large" />
                </div>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  X
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
