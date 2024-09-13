import star from '../../assets/images/icon-star.svg';
import Faq from '../ui/Faq';

const Faqs = ({ faqs, onClick, onSelect }) => {
  return (
    <section className="h-fit w-full p-6 col-start-2 col-end-3 row-start-2 bg-white rounded-lg drop-shadow-[0_32px_56px_rgba(80, 0, 118,0.25)] lg:p-10">
      <div className="flex gap-6 items-center mb-6 lg:mb-8">
        <img src={star} alt="star" className="w-6 h-6 lg:w-10 lg:h-10" />
        <h1 className="text-displayMobile font-bold text-darkPurple lg:text-display">
          FAQs
        </h1>
      </div>

      <div className="not-first-child not-last-child">
        {faqs.map((faq, index) => (
          <Faq faq={faq} key={index} onClick={onClick} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
