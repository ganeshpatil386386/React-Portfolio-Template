import ProjectImages from "../assets/Images/projectImage.png";
import GitHub from "remixicon-react/GithubFillIcon";
import Live from "remixicon-react/LiveFillIcon";

const ProjectsCard = () => {
  return (
    <div className='flex flex-wrap justify-evenly items-center  '>
      <div className='max-w-sm  p-6 my-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='mb-4'>
          <img
            src={ProjectImages}
            alt='Project image'
            className='w-full h-48 object-cover rounded-lg'
          />
        </div>
        <div className='text-gray-800 dark:text-gray-200 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          facilis.
        </div>
        <div className='flex justify-between'>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub className='text-gray-800 dark:text-gray-200' />
          </a>
          <a href='https://live.com/' target='_blank' rel='noopener noreferrer'>
            <Live className='text-gray-800 dark:text-gray-200' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
