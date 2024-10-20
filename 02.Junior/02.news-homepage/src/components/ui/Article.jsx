import imgWeb from '../../assets/images/image-web-3-mobile.jpg';
import imageWeb2 from '../../assets/images/image-web-3-desktop.jpg';
import Button from './Button';
const Article = () => {
  return (
    <div role="article">
      <picture>
        <source media="(min-width: 1024px)" srcSet={imageWeb2} />
        <img src={imgWeb} alt="web-3" className="w-full" />
      </picture>
      <div className="mt-6 md:flex md:gap-[30px] lg:mt-7">
        <h1 className="text-heading-l font-extrabold text-dark-space-blue lg:text-heading-xl lg:min-w-[350px]">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="mt-4 mb-6 text-body text-gunmetal md:mt-0 lg:mb-[29px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Article;
