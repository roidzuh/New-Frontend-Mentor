const Error = ({ error, className }) => {
  return (
    <p className={`text-redError mt-2 text-body-sm ${className}`}>{error}</p>
  );
};

export default Error;
