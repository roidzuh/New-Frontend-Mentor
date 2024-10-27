import BtnPlusMin from '../ui/BtnPlusMin';
import iconPlus from '../../assets/images/icon-plus.svg';
import iconMinus from '../../assets/images/icon-minus.svg';
import BtnAddCart from '../ui/BtnAddCart';

const Product = ({ onPlus, onMinus, onAddCart, quantity }) => {
  return (
    <section className="px-6 pt-6 pb-[88px] flex flex-col gap-6 lg:px-0 lg:max-w-[445px] lg:pb-0 lg:pt-[62px]">
      <div className="flex flex-col gap-4 lg:gap-6">
        <h3 className="text-stormy-gray text-xs font-bold tracking-[1.85px] uppercase lg:text-[13px] lg:tracking-[2px]">
          Sneaker Company
        </h3>

        <h1 className="text-midnight-slate font-bold text-[28px] leading-8 lg:text-[44px] lg:leading-[48px]">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-stormy-gray text-[15px] font-normal leading-[25px] lg:text-[16px] lg:leading-[26px] lg:mt-2">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-[10px]">
        <div className="flex gap-[23px] items-center">
          <p className="text-midnight-slate font-bold text-[28px]">$125.00</p>

          <p className="bg-midnight-slate text-white font-bold text-[16px] h-[27px] px-[10px] rounded-md">
            50%
          </p>
        </div>
        <p className="text-stormy-gray font-bold text-[16px] leading-[26px] line-through">
          $250.00
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-between w-full h-[56px] px-6 bg-icy-whisper rounded-[10px] lg:w-[55%]">
          <BtnPlusMin icon={iconMinus} onClick={onMinus} />
          <p className="text-midnight-slate font-bold text-[16px]">
            {quantity}
          </p>
          <BtnPlusMin icon={iconPlus} onClick={onPlus} />
        </div>
        <BtnAddCart onClick={onAddCart} />
      </div>
    </section>
  );
};

export default Product;
