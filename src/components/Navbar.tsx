import NavMobile from "./NavMobile"
const Navbar = () => {
  const navLinks = [
    'About',
    'Skills',
    'Projects',
    'Contact'
  ]
  return (
    <header className="w-full shadow-md fixed bg-[#1c1b1a]">
      <nav className="flex items-center relative justify-between w-full pl-2">
        <a href="#" className="nav-logo text-2xl font-light">{'<Jekoh/>'}</a>
        <NavMobile links={navLinks} />
      </nav>
    </header>)
}

export default Navbar
