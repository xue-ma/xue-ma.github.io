import React from 'react'

const Ethnography = () => {
  return (
    <div id='ethnography' className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl md:text-4xl font-bold text-left mb-4 w-full'>Ethnography</h1>
      <p className='my-4'>
        I have strong curiosity and interest in the ways ethnography could be made. Here are some
        projects I have produced as I explore the ways to make ethnography.
      </p>
      {/* <div className='relative'>
        <iframe
          className='absolute inset-0 w-full h-full'
          src='https://www.youtube.com/embed/pVRQqHjQNYs'
          frameborder='0'
          title='YouTube video player'
        ></iframe>
      </div> */}
      <div className='aspect-w-16 aspect-h-9 w-full max-w-xl'>
        <iframe
          src='https://www.youtube.com/embed/pVRQqHjQNYs'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='YouTube video player'
        ></iframe>
      </div>
      {/* <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/pVRQqHjQNYs'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
        className='shadow-xl'
      ></iframe> */}
    </div>
  )
}

export default Ethnography
