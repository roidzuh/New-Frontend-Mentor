import Gallery from './Gallery';
import Product from './Product';

const Main = ({ onPlus, onMinus, onAddCart, quantity }) => {
  return (
    <main className="flex flex-col lg:flex-row lg:mx-auto lg:max-w-[1110px] lg:justify-center lg:gap-[40px] lg:mb-[132px] xl:gap-[125px] ">
      <Gallery />
      <Product
        onPlus={onPlus}
        onMinus={onMinus}
        quantity={quantity}
        onAddCart={onAddCart}
      />
    </main>
  );
};

export default Main;
