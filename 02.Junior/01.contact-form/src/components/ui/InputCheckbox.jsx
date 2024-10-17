import Error from './Error';

const InputCheckbox = ({ onChange, checked, error }) => {
  return (
    <div>
      <div className="flex items-center gap-4 pr-4">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="appearance-none h-[18px] w-[18px] border-2 rounded-[3px] border-grey500 checked:bg-icon-checkbox checked:bg-no-repeat checked:bg-contain  checked:border-none transition-colors duration-300 cursor-pointer"
          checked={checked}
          onChange={onChange}
        />

        <label
          htmlFor="terms"
          className="text-body-sm text-grey900 cursor-pointer"
        >
          I consent to being contacted by the team{' '}
          <span className="text-green600">*</span>
        </label>
      </div>
      {error && <Error error={error} />}
    </div>
  );
};

export default InputCheckbox;
