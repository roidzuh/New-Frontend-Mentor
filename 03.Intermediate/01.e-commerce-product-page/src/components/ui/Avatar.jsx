import avatar from '../../assets/images/image-avatar.png';

const Avatar = () => {
  return (
    <img
      src={avatar}
      alt="avatar"
      className="w-6 h-6 lg:w-[50px] lg:h-[50px] hover:border-2 hover:border-amber-blaze hover:rounded-full transition-all duration-200 ease-in-out cursor-pointer"
    />
  );
};

export default Avatar;
