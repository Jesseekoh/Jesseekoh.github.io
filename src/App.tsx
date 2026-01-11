import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-dvh overflow-x-hidden bg-[var(--color-bg)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
