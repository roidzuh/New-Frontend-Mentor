import Logo from '../ui/Logo';
import Navbar from '../ui/Navbar';

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-[1200px] lg:mx-auto">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
