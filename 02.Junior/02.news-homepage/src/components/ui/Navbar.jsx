import menuIcon from '../../assets/images/icon-menu.svg';
import closeIcon from '../../assets/images/icon-menu-close.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <img
          src={menuIcon}
          alt="menu icon"
          onClick={toggleMenu}
          className="lg:hidden"
        />

        <ul className="hidden lg:flex lg:gap-10 lg:text-body lg:text-gunmetal">
          <li className="cursor-pointer tramsition-all duration-300 ease-in-out hover:text-Light-Vermillion">
            Home
          </li>
          <li className="cursor-pointer tramsition-all duration-300 ease-in-out hover:text-Light-Vermillion">
            New
          </li>
          <li className="cursor-pointer tramsition-all duration-300 ease-in-out hover:text-Light-Vermillion">
            Popular
          </li>
          <li className="cursor-pointer tramsition-all duration-300 ease-in-out hover:text-Light-Vermillion">
            Trending
          </li>
          <li className="cursor-pointer tramsition-all duration-300 ease-in-out hover:text-Light-Vermillion">
            Categories
          </li>
        </ul>
      </nav>

      <nav
        className={`fixed bg-almost-white top-0 w-4/6 h-full right-0 z-50 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? 'right-0 opacity-100' : '-right-full opacity-0'
        }`}
      >
        <img
          src={closeIcon}
          alt="close"
          className="absolute top-7 right-5"
          onClick={toggleMenu}
        />

        <ul className="mt-36 ml-6 flex flex-col gap-6 text-lg leading-6">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
