const NavDesktop = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8">
        <li
          className="relative text-stormy-gray font-normal text-[15px] leading-[26px] cursor-pointer transition-all duration-300 ease-in-out hover:text-midnight-slate
    after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-amber-blaze after:left-0 after:top-[58px] after:opacity-0 after:pointer-events-none after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
        >
          collections
        </li>
        <li
          className="relative text-stormy-gray font-normal text-[15px] leading-[26px] cursor-pointer transition-all duration-300 ease-in-out hover:text-midnight-slate
    after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-amber-blaze after:left-0 after:top-[58px] after:opacity-0 after:pointer-events-none after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
        >
          Men
        </li>
        <li
          className="relative text-stormy-gray font-normal text-[15px] leading-[26px] cursor-pointer transition-all duration-300 ease-in-out hover:text-midnight-slate
    after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-amber-blaze after:left-0 after:top-[58px] after:opacity-0 after:pointer-events-none after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
        >
          Women
        </li>
        <li
          className="relative text-stormy-gray font-normal text-[15px] leading-[26px] cursor-pointer transition-all duration-300 ease-in-out hover:text-midnight-slate
    after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-amber-blaze after:left-0 after:top-[58px] after:opacity-0 after:pointer-events-none after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
        >
          About
        </li>
        <li
          className="relative text-stormy-gray font-normal text-[15px] leading-[26px] cursor-pointer transition-all duration-300 ease-in-out hover:text-midnight-slate
    after:content-[''] after:absolute after:w-full after:h-[4px] after:bg-amber-blaze after:left-0 after:top-[58px] after:opacity-0 after:pointer-events-none after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;

// hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
