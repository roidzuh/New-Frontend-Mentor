import Header from './components/layout/Header';
import MainNews from './components/layout/MainNews';
import RelatePost from './components/layout/RelatePost';

const App = () => {
  return (
    <>
      <div className="mt-7 mx-4 mb-20 lg:mt-[89px] lg:mb-[129px]">
        <Header />
        <main>
          <MainNews />
          <RelatePost />
        </main>
      </div>
      <p className="text-center mb-4">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io"
          className="text-Light-Vermillion underline"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/roidzuh"
          className="text-Light-Vermillion underline"
        >
          Roid Zuhdianto
        </a>
        .
      </p>
    </>
  );
};

export default App;
