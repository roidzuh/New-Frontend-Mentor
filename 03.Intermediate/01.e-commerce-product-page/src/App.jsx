import { useState } from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

const App = () => {
  const [productCart, setProductCart] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddCart = () => {
    setProductCart(productCart + quantity);
    setQuantity(0);
  };

  const handleDeleteCart = () => {
    setProductCart(0);
  };

  return (
    <>
      <Header productCart={productCart} onDeleteCart={handleDeleteCart} />
      <Main
        onPlus={handlePlus}
        onMinus={handleMinus}
        quantity={quantity}
        onAddCart={handleAddCart}
      />
      <p className="text-center mb-4">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io"
          className="text-amber-blaze underline"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/roidzuh"
          className="text-amber-blaze underline"
        >
          Roid Zuhdianto
        </a>
        .
      </p>
    </>
  );
};

export default App;
