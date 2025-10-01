export default function About() {
  return (
    <section id="about" className="section min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">About Me</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">Learn more about my background and journey</p>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 text-lg mb-4">
            I'm a passionate frontend developer with expertise in creating modern, responsive web applications. 
            With a strong foundation in JavaScript, TypeScript, and React, I specialize in building user-friendly 
            interfaces that provide an exceptional user experience.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            My journey in web development started several years ago, and I've continuously evolved my skills 
            to keep up with the latest technologies and best practices. I believe in writing clean, maintainable 
            code and creating intuitive designs that users love.
          </p>
          <p className="text-gray-700 text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community through blog posts and mentoring.
          </p>
        </div>
      </div>
    </section>
  );
}