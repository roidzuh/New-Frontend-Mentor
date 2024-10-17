import iconSuccessCheck from '../../assets/images/icon-success-check.svg';

const Success = ({ show }) => {
  return (
    <section
      className={`fixed inset-x-0 top-0 bg-grey900 rounded-xl m-6 p-6 flex flex-col gap-2 md:max-w-[450px] md:mx-auto transition-all duration-500 ease-in-out ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      }`}
    >
      <div className="flex gap-2">
        <img src={iconSuccessCheck} alt="success-check" />
        <h2 className="text-body-md-bold text-white">Message Sent!</h2>
      </div>
      <p className="text-body-sm text-green200">
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </section>
  );
};

export default Success;
