const BlogCard = ({ title, brief, url, imageUrl }) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={imageUrl} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-400 text-base'>{brief}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-800 font-semibold'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
