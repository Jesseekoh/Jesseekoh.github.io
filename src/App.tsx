import './App.css';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import About from './sections/About';
import Profile from './sections/Profile';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-6">
        <Hero />
        <About />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
