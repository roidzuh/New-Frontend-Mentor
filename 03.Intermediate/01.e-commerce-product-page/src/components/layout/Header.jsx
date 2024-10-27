import Navbar from '../ui/Navbar';
import Logo from '../ui/Logo';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import { useState } from 'react';
import NavDesktop from '../ui/NavDesktop';

const Header = ({ productCart, onDeleteCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCart = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="relative flex px-6 pt-[19px] pb-[25px] justify-between lg:px-[80px] lg:pb-[125px] lg:pt-7 lg:after:absolute lg:after:content-[''] lg:after:left-[80px] lg:after:right-[80px] lg:after:h-[1px] lg:after:bg-frosted-sky lg:after:top-[101px] lg:max-w-[1210px] lg:mx-auto">
      <div className="flex gap-4 items-center lg:gap-[56.5px] ">
        <Navbar />
        <Logo />
        <NavDesktop />
      </div>
      <div className="flex gap-[22px] items-center lg:gap-[46px]">
        <Card
          productCart={productCart}
          onDeleteCart={onDeleteCart}
          isOpen={isOpen}
          onToggleCart={handleToggleCart}
        />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
