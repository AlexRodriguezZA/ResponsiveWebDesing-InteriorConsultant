import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home"},
    { label: "Collection" },
    { label: "About" },
    { label: "Clients" },
    { label: "Contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null); // Nuevo estado para el enlace con hover

  const handleMouseEnter = (label) => {
    setHoveredLink(label); // Al entrar en un enlace, establece el enlace con hover
  };

  const handleMouseLeave = () => {
    setHoveredLink(null); // Al salir de un enlace, establece el enlace con hover a null
  };
  
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-11/12  max-w-[1400px] md:px-10  md:w-full h-16 flex flex-row md:flex-nowrap md:h-20 justify-between items-center text-white bg-[#181719] z-[1]">
        <ul className="h-full flex justify-center items-center mt-4 ml-3">
          <li style={{ fontFamily: "'Crimson Pro', serif"}} className="text-sm font-extralight px-2 py-2 border uppercase hover:cursor-pointer">This Interior</li>
        </ul>
      <div className="md:flex md:flex-col items-center gap-10">
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <span className="text-3xl mt-4 material-symbols-outlined">close</span>
          ) : (
            <span className="text-3xl mt-4 material-symbols-outlined">menu</span>
          )}
        </button>
        <ul
          className={`${
            isMobileMenuOpen ? "md:block" : "hidden md:flex"
          } flex-col gap-20 md:flex-row md:items-center absolute md:static top-16 w-full h-full flex justify-center mt-4 items-center left-0 md:top-0 md:left-auto bg-[#181719]  md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li
              className="font-medium text-lg hover:cursor-pointer"
              key={item.label}
              onMouseOver={() => handleMouseEnter(item.label)} // Pasa la etiqueta del enlace al manejador de hover
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.route}>{item.label}</a>
              <hr className={`${hoveredLink === item.label ? "block w-full" : "hidden"} h-[2px] bg-white`}/> {/* Mostrar hr solo si el enlace actual está siendo hovered */}

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;