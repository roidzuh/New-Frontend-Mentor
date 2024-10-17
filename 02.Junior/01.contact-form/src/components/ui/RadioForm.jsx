import Error from './Error';
import InputRadio from './InputRadio';

const RadioForm = ({ onChange, error, selected }) => {
  return (
    <div>
      <fieldset className="flex flex-col gap-4 justify-center md:flex-row">
        <legend className="text-body-sm text-grey900 mb-4">
          Query Type <span className="text-green600">*</span>
        </legend>

        <InputRadio
          name="queryType"
          value="generalEnquiry"
          title="General Enquiry"
          checked={selected === 'generalEnquiry'}
          onChange={onChange}
          className={
            selected === 'generalEnquiry' ? 'bg-green200 border-green600' : ''
          }
        />

        <InputRadio
          name="queryType"
          value="supportRequest"
          title="Support Request"
          checked={selected === 'supportRequest'}
          onChange={onChange}
          className={
            selected === 'supportRequest' ? 'bg-green200 border-green600' : ''
          }
        />
      </fieldset>
      {error && <Error error={error} className={'mt-4'} />}
    </div>
  );
};

export default RadioForm;
