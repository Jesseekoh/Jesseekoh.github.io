import './App.css';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import About from './sections/About';
import Profile from './sections/Profile';
import Footer from './components/footer';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); // Simulate a loading time of 2 seconds

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Navbar />
      <main>
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
