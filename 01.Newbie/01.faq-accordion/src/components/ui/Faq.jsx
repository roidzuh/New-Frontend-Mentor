import plus from '../../assets/images/icon-plus.svg';
import minus from '../../assets/images/icon-minus.svg';

const Faq = ({ faq, onClick, onSelect }) => {
  const select = onSelect === faq.question;

  const toggleAccordion = () => {
    select ? onClick(null) : onClick(faq.question);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-6 ">
        <button
          className="flex relative text-left group"
          onClick={toggleAccordion}
        >
          <h2 className="max-w-[225px] font-semibold text-titleMobile text-darkPurple lg:text-title lg:max-w-[28rem]  transition-all duration-300 ease-in-out lg:group-hover:text-pink">
            {faq.question}
          </h2>

          <img
            src={select ? minus : plus}
            alt="icon"
            className="w-[30px] h-[30px] absolute right-0 top-1/2 -translate-y-1/2"
          />
        </button>

        <p
          className={`font-normal text-bodyMobile text-palePurple lg:text-body ${
            select ? '' : 'hidden'
          }`}
        >
          {faq.answer}
        </p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Faq;
