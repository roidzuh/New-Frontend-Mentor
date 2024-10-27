const BtnPrevNext = ({ className, icon, onclick, imgClassName }) => {
  return (
    <button
      className={`absolute w-10 h-10 bg-white rounded-full top-1/2 -translate-y-1/2 ${className}`}
      onClick={() => onclick()}
    >
      <img
        src={icon}
        alt="btn prev/next"
        className={`absolute w-[5.71px] h-[11.43px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${imgClassName}`}
      />
    </button>
  );
};

export default BtnPrevNext;
