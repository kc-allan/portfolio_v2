import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const handleClick = (event) => {
    event.target.classList.toggle("active");
  };
  return (
    <header className="fixed flex w-full justify-between items-center md:px-10 px-4 py-4 bg-[#e0e0db] opacity-80">
      <button onClick={scroll.scrollToTop} className="text-3xl font-semibold">Allan Kirui</button>
      <div className="hidden md:flex justify-between items-center gap-6 text-lg font-light">
        <Link to="services" smooth={true} duration={500} >Services</Link>
        <Link to="Linkbout" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link
          className="bg-[#253551] text-white p-4 rounded-full text-sm font-semibold"
          to="book" smooth={true} duration={500}
        >
          Book Now
        </Link>
      </div>
      <div
        onClick={handleClick}
        id="ham-menu"
        className="relative h-10 w-10 cursor-pointer *:transition-transform *:duration-300 *:ease md:hidden"
      >
        <span className="absolute top-1/4 bg-gray-700 h-[2px] w-full"></span>
        <span className="absolute top-1/2 right-0 bg-gray-700 h-[2px] w-2/3"></span>
        <span className="absolute top-3/4 bg-gray-700 h-[2px] w-full"></span>
      </div>
    </header>
  );
};

export default Header;
