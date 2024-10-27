import { useState } from 'react';
import { productsImg } from '../../utils/data';
import ButtonPrevNext from '../ui/BtnPrevNext';
import iconNext from '../../assets/images/icon-next.svg';
import iconPrev from '../../assets/images/icon-previous.svg';
import ModalGallery from './ModalGallery';

const Gallery = () => {
  const [number, setNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const onClickNext = () => {
    if (number < productsImg.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };

  const onClickPrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(productsImg.length - 1);
    }
  };

  return (
    <>
      <section>
        <div className="relative lg:hidden lg:max-w-[445px]">
          <ButtonPrevNext
            icon={iconPrev}
            className={'left-4 top-0'}
            onclick={onClickPrev}
          />
          <img
            src={productsImg[number]}
            alt="product-img"
            className="w-full h-[300px] object-cover"
          />
          <ButtonPrevNext
            className={'right-4 top-0'}
            icon={iconNext}
            onclick={onClickNext}
          />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:gap-8">
          <img
            src={productsImg[number]}
            alt="product-img"
            className="w-[445px] h-[445px] rounded-[15px] cursor-pointer"
            onClick={toggleModal}
          />
          <div className="flex justify-between">
            {productsImg.map((img, index) => (
              <div
                key={index}
                className={`relative w-[88px] h-[88px] rounded-[10px] cursor-pointer ${
                  number === index ? 'border-2 border-amber-blaze' : ''
                }`}
                onClick={() => setNumber(index)}
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
      {isModalOpen && (
        <ModalGallery
          number={number}
          productsImg={productsImg}
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          onSetNumber={setNumber}
          onToggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Gallery;
