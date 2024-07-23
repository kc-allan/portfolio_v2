const Header = () => {
  const handleClick = (event) => {
    event.target.classList.toggle("active");
  };
  return (
    <header className="fixed flex w-full justify-between items-center md:px-10 px-4 py-4 bg-[#e0e0db]">
      <a href="/" className="text-3xl">Allan Kirui</a>
      <div className="hidden md:flex justify-between items-center gap-6 text-lg font-light">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          className="bg-[#253551] text-white p-4 rounded-full text-sm font-semibold"
          href="#book"
        >
          Book Now
        </a>
      </div>
      <div
        onClick={handleClick}
        id="ham-menu"
        className="relative h-10 w-10 cursor-pointer transition-transform duration-300 ease-in-out md:hidden"
      >
        <span className="absolute top-1/4 bg-gray-700 h-[2px] w-full"></span>
        <span className="absolute top-1/2 right-0 bg-gray-700 h-[2px] w-2/3"></span>
        <span className="absolute top-3/4 bg-gray-700 h-[2px] w-full"></span>
      </div>
    </header>
  );
};

export default Header;
