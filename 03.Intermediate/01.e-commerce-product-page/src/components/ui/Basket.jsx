import imgProduct from '../../assets/images/image-product-1-thumbnail.jpg';
import iconDelete from '../../assets/images/icon-delete.svg';
import { forwardRef } from 'react';

const Basket = forwardRef(({ productCart, onDeleteCart, isOpen }, ref) => {
  return (
    <section
      ref={ref}
      className={`absolute z-40  left-1/2 -translate-x-1/2 h-[256px] min-w-[360px] bg-white rounded-[10px] shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)] transition-all duration-300 ease-in-out  lg:translate-x-0 lg:left-auto lg:right-4 ${
        isOpen
          ? 'opacity-100 top-[76px] lg:top-[90px] visible'
          : 'opacity-0 top-[65px] invisible'
      }`}
    >
      <div className="p-6">
        <h2 className="relative text-midnight-slate font-bold text-[16px] ">
          Cart
        </h2>
      </div>
      <hr className="bg-frosted-sky" />
      <div className="px-6 pt-6 pb-8 flex flex-col items-center">
        {productCart === 0 ? (
          <h2 className="text-stormy-gray font-bold text-[16px] leading-[26px] mt-[53px]">
            Your cart is empty.
          </h2>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src={imgProduct}
                alt="product-1"
                className="w-[50px] h-[50px] rounded"
              />
              <div>
                <h3 className="text-stormy-gray font-normal text-[16px] leading-[26px]">
                  Fall Limited Edition Sneakers
                </h3>
                <p className="text-stormy-gray font-normal text-[16px] leading-[26px]">
                  $125.00 x {productCart}{' '}
                  <span className="ml-[6px] text-midnight-slate font-bold text-[16px] leading-[26px]">
                    ${productCart * 125}.00
                  </span>
                </p>
              </div>
              <button onClick={onDeleteCart}>
                <img
                  src={iconDelete}
                  alt="delete icon"
                  className="w-[14px] h-[16px]"
                />
              </button>
            </div>
            <button
              className="text-midnight-slate bg-amber-blaze font-bold text-[16px] py-[18px] rounded-[10px]"
              onClick={onDeleteCart}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

// Menetapkan display name untuk komponen Basket
Basket.displayName = 'Basket';

export default Basket;
