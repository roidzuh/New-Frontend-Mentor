import Article from '../ui/Article';
import NewsList from '../ui/NewsList';

const MainNews = () => {
  return (
    <section
      className="flex flex-col mt-8 lg:mt-[55px] lg:flex-row lg:gap-[30px] lg:max-w-[1200px] lg:mx-auto "
      role="main"
    >
      <Article />
      <NewsList />
    </section>
  );
};

export default MainNews;
