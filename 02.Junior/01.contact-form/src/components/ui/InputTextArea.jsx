import Error from './Error';

const InputTextArea = ({ onChange, value, error, onBlur }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-body-sm text-grey900">
          Message <span className="text-green600">*</span>
        </label>

        <textarea
          name="message"
          id="message"
          className={`border border-grey500 rounded-lg py-3 px-6 text-body-md-regular text-grey900 resize-none focus:outline-none transition-all duration-300 cursor-pointer h-60 md:h-32 ${
            error
              ? 'border-redError'
              : 'hover:border-green600 focus:border-green600'
          }`}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        ></textarea>
      </div>
      {error && <Error error={error} />}
    </div>
  );
};

export default InputTextArea;
