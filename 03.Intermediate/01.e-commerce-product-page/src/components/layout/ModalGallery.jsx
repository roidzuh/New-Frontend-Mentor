import BtnPrevNext from '../ui/BtnPrevNext';
import iconNext from '../../assets/images/icon-next.svg';
import iconPrev from '../../assets/images/icon-previous.svg';
import { useEffect, useRef } from 'react';

const ModalGallery = ({
  number,
  productsImg,
  onClickPrev,
  onClickNext,
  onSetNumber,
  onToggleModal,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onToggleModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, onToggleModal]);

  return (
    <section className="w-full h-full bg-black/70 fixed top-0 ">
      <div
        ref={modalRef}
        className="absolute top-[25px] left-1/2 -translate-x-1/2 flex flex-col gap-6"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer self-end group"
          onClick={() => onToggleModal()}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#D8D8D8"
            fillRule="evenodd"
            className=" transition-all duration-300 ease-in-out group-hover:fill-amber-blaze"
          />
        </svg>

        <div className="relative">
          <BtnPrevNext
            icon={iconPrev}
            className={'absolute w-[56px] h-[56px] -left-[29px]'}
            imgClassName={'w-[8px] h-[16px]'}
            onclick={onClickPrev}
          />
          <img
            src={productsImg[number]}
            alt="product-img"
            className="w-[550px] h-[550px] rounded-[15px] object-cover"
          />
          <BtnPrevNext
            icon={iconNext}
            className={'absolute w-[56px] h-[56px] -right-[29px]'}
            imgClassName={'w-[8px] h-[16px]'}
            onclick={onClickNext}
          />
        </div>

        <div className="flex gap-[31px] justify-center mt-4">
          {productsImg.map((img, index) => (
            <div
              key={index}
              className={`relative w-[88px] h-[88px] rounded-[10px] cursor-pointer bg-white ${
                number === index ? 'border-2 border-amber-blaze' : ''
              }`}
              onClick={() => onSetNumber(index)}
            >
              <img
                src={img}
                alt="product-img"
                className={`w-full h-full rounded-[8px] transition-opacity duration-300 ${
                  number === index ? 'opacity-35' : 'hover:opacity-50'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalGallery;
