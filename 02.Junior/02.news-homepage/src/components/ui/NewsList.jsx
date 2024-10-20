import { listNew } from '../../utils/data';

const NewsList = () => {
  return (
    <aside className="mt-16 px-5 py-6 bg-dark-space-blue lg:mt-0 lg:min-w-[350px] lg:px-6 lg:py-8">
      <h2 className="text-heading-m text-yellow-orange lg:text-heading-l">
        New
      </h2>
      <ul className="mt-9 flex flex-col gap-[60px] line">
        {listNew.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-col gap-2 relative cursor-pointer group "
            >
              <h3 className="text-almost-white text-heading-s lg:group-hover:text-yellow-orange lg:transition-all ; lg:duration-300 lg:ease-in-out">
                {item.title}
              </h3>
              <p className="text-body text-silver">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default NewsList;
