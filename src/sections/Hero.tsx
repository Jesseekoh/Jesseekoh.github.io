export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Hi, I'm <span className="text-indigo-600">Jesse Ekoh-Ordan</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Frontend Developer & UI/UX Designer passionate about creating
          beautiful, functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-8 py-3 rounded-4xl font-medium hover:bg-indigo-700 transition-colors shadow-md"
          >
            Contact Me
          </a>
          <a
            href="#profile"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-4xl font-medium hover:bg-indigo-50 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
