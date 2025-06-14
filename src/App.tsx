import './App.css';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
function App() {
  return (
    <>
      <Navbar />
      {/* <div class="snap-mandatory"> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
