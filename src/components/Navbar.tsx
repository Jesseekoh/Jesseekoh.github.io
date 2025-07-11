import { ArrowDownToLine } from 'lucide-react';
import NavMobile from './NavMobile';
const Navbar = () => {
  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];
  return (
    <header className="fixed w-full top-0 z-10 backdrop-blur-2xl">
      <nav className=" mx-auto">
        <div className="container mx-auto max-w-[1024px] px-6 py-2 flex items-center relative justify-between">
          <a href="#" className="nav-logo text-2xl font-light">
            {'<Jekoh/>'}
          </a>
          <NavMobile links={navLinks} />
          <ul className=" gap-16 hidden lg:flex">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>

          <a
            href="../assets/images/IMG_3103.jpg"
            download
            className="font-mono relative  after:content-[''] after:w-full after:h-full after:bg-red-400 after:left-0 after:absolute after:top-0 after:-z-1 "
          >
            <button className="p-2 bg-[#3CDBD3] translate-1.5 transition-all hover:translate-0 flex gap-4 text-[#113537] items-center">
              Get My CV
              <span className="rounded-full">
                <ArrowDownToLine />
              </span>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
