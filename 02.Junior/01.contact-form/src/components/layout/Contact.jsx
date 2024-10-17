import { useState } from 'react';
import BtnSubmit from '../ui/BtnSubmit';
import InputCheckbox from '../ui/InputCheckbox';
import InputText from '../ui/InputText';
import InputTextArea from '../ui/InputTextArea';
import RadioForm from '../ui/RadioForm';
import Success from '../ui/Success';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  console.log(formData);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Set error to false if field is valid
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    const validationErrors = validate(name);
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // Validasi seluruh form saat submit

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        terms: false,
      });

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    } else {
      setErrors(validationErrors);
    }
  };

  // Fungsi validasi untuk masing-masing field
  const validators = {
    firstName: (value) => (value ? '' : 'This field is required'),
    lastName: (value) => (value ? '' : 'This field is required'),
    email: (value) =>
      value && /\S+@\S+\.\S+/.test(value)
        ? ''
        : 'Please enter a valid email address',
    queryType: (value) => (value ? '' : 'Please select a query type'),
    message: (value) => (value ? '' : 'This field is required'),
    terms: (value) =>
      value ? '' : 'To submit this form, please consent to being contacted',
  };

  // Fungsi validate yang dapat memvalidasi seluruh form atau per field
  const validate = (fieldName) => {
    let newErrors = { ...errors };

    const validateField = (name) => {
      const errorMessage = validators[name](formData[name]);
      if (errorMessage) {
        newErrors[name] = errorMessage;
      } else {
        delete newErrors[name];
      }
    };

    if (fieldName) {
      // Validasi hanya satu field
      validateField(fieldName);
    } else {
      // Validasi seluruh form
      Object.keys(formData).forEach((key) => validateField(key));
    }

    return newErrors;
  };

  return (
    <>
      <section className="bg-white w-full max-w-[736px] mx-4 my-8 p-6 rounded-2xl text-grey900 md:mx-10 md:my-32 md:p-10">
        <h1 className="text-heading mb-8">Contact Us</h1>
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 md:flex-row">
            <InputText
              title="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.firstName}
            />
            <InputText
              title="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.lastName}
            />
          </div>

          <InputText
            title="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />

          <RadioForm
            onChange={handleChange}
            selected={formData.queryType}
            error={errors.queryType}
          />
          <div className="flex flex-col gap-10">
            <InputTextArea
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.message}
              error={errors.message}
            />
            <InputCheckbox
              name="terms"
              onChange={handleChange}
              checked={formData.terms}
              error={errors.terms}
            />
            <BtnSubmit />
          </div>
        </form>
      </section>

      <Success show={success} />
    </>
  );
}

export default Contact;
