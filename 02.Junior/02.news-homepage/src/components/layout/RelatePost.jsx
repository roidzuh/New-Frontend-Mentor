import { relatePost } from '../../utils/data';

const RelatePost = () => {
  return (
    <section className="mt-16 lg:mt-[71px] lg:max-w-[1200px] lg:mx-auto">
      <ul className="flex flex-col gap-8 lg:flex-row lg:gap-[30px]">
        {relatePost.map((item) => {
          return (
            <li key={item.id} className="flex gap-6 cursor-pointer group">
              <img src={item.image} alt={item.title} className="w-[100px]" />
              <div className="flex flex-col justify-between">
                <p className="text-heading-m text-Light-Vermillion">
                  {item.id}
                </p>
                <h3 className="text-heading-xs text-dark-space-blue  lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:text-Light-Vermillion">
                  {item.title}
                </h3>
                <p className="text-body text-gunmetal">{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RelatePost;
