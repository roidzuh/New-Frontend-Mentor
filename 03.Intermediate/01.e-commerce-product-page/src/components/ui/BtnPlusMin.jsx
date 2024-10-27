const BtnPlusMin = ({ onClick, icon }) => {
  return (
    <button onClick={() => onClick()}>
      <img src={icon} alt="btn plus/minus" />
    </button>
  );
};

export default BtnPlusMin;
