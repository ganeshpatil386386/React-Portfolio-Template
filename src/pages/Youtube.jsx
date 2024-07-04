const Youtube = () => {
  return (
    <div className='flex justify-center items-center mx-10 my-4 gap-4 flex-wrap '>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/Y75zpNp6Cqs?si=AXftvNh8m_TC0DJ6'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowfullscreen
        className='rounded-lg'
      ></iframe>

      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/IuJIqwTICAc?si=hY0mFeBE1yWY7wjl'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowfullscreen
        className='rounded-lg'
      ></iframe>

      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/wDCgjqVB_Vw?si=6u1ALAqSWmsKLBGF'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowfullscreen
        className='rounded-lg'
      ></iframe>
    </div>
  );
};

export default Youtube;
