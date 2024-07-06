import profile from "../assets/Images/profile.png";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import TwitterXFillIcon from "remixicon-react/TwitterFillIcon";

const Content = () => {
  return (
    <div className='flex flex-col items-center p-16'>
      <link rel='preload' as='image' href={profile} />
      <div className='mb-4'>
        <img
          src={profile}
          alt='profile of Ganesh Patil'
          width='300px'
          height='300px'
          className='rounded-full border-2 border-white'
        />
      </div>
      <h3 className='text-lg font-semibold font-display text-black dark:text-white'>
        <span>Hey, Im </span>
        <span>Ganesh Patil</span>
      </h3>
      <div className='text-center my-4 font-display text-black dark:text-white'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, harum?
          Quasi, odio! Quod officia omnis labore facilis magni, corporis quia,
          est, eaque at accusamus officiis laboriosam. Provident vel voluptates
          architecto?
        </p>
      </div>
      <div className='flex space-x-4'>
        <GithubFillIcon className='text-black dark:text-white' />
        <LinkedinFillIcon className='text-black dark:text-white' />
        <TwitterXFillIcon className='text-black dark:text-white' />
      </div>
    </div>
  );
};

export default Content;
