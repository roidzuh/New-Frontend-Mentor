import Error from './Error';

const InputText = ({ title, name, value, onChange, type, error, onBlur }) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-body-sm text-grey900">
          {title} <span className="text-green600">*</span>
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className={`border border-grey500 rounded-lg py-3 px-6 text-body-md-regular text-grey900 focus:outline-none transition-all duration-300 cursor-pointer ${
            error
              ? 'border-redError'
              : 'hover:border-green600 focus:border-green600'
          } `}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <Error error={error} />}
    </div>
  );
};

export default InputText;
