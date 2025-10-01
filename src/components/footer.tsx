const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-white">{'<Jekoh/>'}</div>
            <p className="text-gray-400 mt-2">
              Frontend Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Made with ❤️ by Jekoh
            </div>
            <div className="text-gray-500 text-xs mt-1">
              All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
