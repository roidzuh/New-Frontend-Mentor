import menuIcon from '../../assets/images/icon-menu.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const navbarref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarref.current && !navbarref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="lg:hidden">
      <button className="flex" onClick={toggleMenu}>
        <img src={menuIcon} alt="menu icon" />
      </button>
      <div
        className={`fixed w-full h-screen z-50  top-0 transition-all duration-500 ease-in-out bg-black/70 ${
          isOpen ? 'left-0 opacity-100' : '-left-full opacity-0 '
        }`}
      >
        <div ref={navbarref} className={` bg-white w-4/6 h-screen `}>
          <button
            className="absolute top-[25px] left-[25px]"
            onClick={toggleMenu}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <ul className="pl-[25px] pt-[92px] flex flex-col gap-5">
            <li className="text-midnight-slate font-bold text-[18px] leading-[26px]">
              Collections
            </li>
            <li className="text-midnight-slate font-bold text-[18px] leading-[26px]">
              Men
            </li>
            <li className="text-midnight-slate font-bold text-[18px] leading-[26px]">
              Women
            </li>
            <li className="text-midnight-slate font-bold text-[18px] leading-[26px]">
              About
            </li>
            <li className="text-midnight-slate font-bold text-[18px] leading-[26px]">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
