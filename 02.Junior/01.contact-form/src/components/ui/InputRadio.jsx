const InputRadio = ({ name, value, title, onChange, className, checked }) => {
  return (
    <div className="flex gap-3 relative flex-1">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 appearance-none w-5 h-5 border-2 border-grey500 rounded-full checked:bg-icon-radio-selected checked:border-none checked:bg-no-repeat checked:bg-contain transition-colors duration-300"
        onChange={onChange}
      />
      <label
        htmlFor={value}
        className={`cursor-pointer text-body-md-regular text-grey900 border py-3 pl-[60px] pr-6 w-full rounded-lg border-grey500 hover:border-green600 transition-all duration-300 ${className}`}
      >
        {title}
      </label>
    </div>
  );
};

export default InputRadio;
