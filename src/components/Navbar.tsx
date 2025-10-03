import { Spiral as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar when mobile menu is open
      if (isMenuOpen) return;

      const currentScrollY = window.scrollY;

      // Update scrolled state for shadow effect
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px, hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate scroll offset based on navbar state
      const navbarHeight = 70; // Approximate height of navbar
      const scrollOffset = visible ? navbarHeight : 20; // Use smaller offset if navbar is hidden

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - scrollOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      closeMenu(); // Close the menu after clicking a link
    }
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}
    >
      <div className="flex items-center">
        <a
          href="#"
          className="text-xl font-light text-gray-800"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          {'<Jekoh/>'}
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('profile');
          }}
        >
          Profile
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
        <a
          href="/Jesse_Ekoh-Ordan_Resume.pdf"
          download
          className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button and Resume Download */}
      <div className="md:hidden flex items-center space-x-4">
        <a
          href="/Jesse_Ekoh-Ordan_Resume.pdf"
          download
          className="flex items-center text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right ml-1"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
        <div
          className="flex flex-col space-y-1 cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <Hamburger size={24} toggled={isMenuOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-dvh bg-white z-40 transition-all duration-300 ease-in-out pt-16 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          <a
            href="#"
            className="text-2xl text-gray-800 font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
              closeMenu();
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-2xl text-gray-800 font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
              closeMenu();
            }}
          >
            About
          </a>
          <a
            href="#"
            className="text-2xl text-gray-800 font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('profile');
              closeMenu();
            }}
          >
            Profile
          </a>
          <a
            href="#"
            className="text-2xl text-gray-800 font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              closeMenu();
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
