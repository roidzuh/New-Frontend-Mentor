import logo from '../../assets/images/logo.svg';
const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className="w-[45px] h-7 lg:w-[64px] lg:h-[39px]"
      />
    </>
  );
};

export default Logo;
