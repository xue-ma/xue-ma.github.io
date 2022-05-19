import React from 'react'

const Ethnography = () => {
  return (
    <div
      id='ethnography'
      className='my-8 sm:my-0 sm:min-h-screen flex flex-col justify-center items-center'
    >
      <h1 className='text-2xl sm:text-4xl font-bold text-left w-full'>Ethnography</h1>
      <p className='my-4'>
        I have strong curiosity and interest in the ways ethnography could be made. Here are some
        projects I have produced as I explore the ways to make ethnography.
      </p>
      <ul className='list-disc ml-8'>
        <li>
          Food Story (2018) is a portrait of a Chinese restaurant in Toronto’s Chinatown (
          <a
            className='text-blue-600 visited:text-purple-600 opacity-100 hover:opacity-100'
            href='https://youtu.be/pVRQqHjQNYs'
          >
            Youtube Link
          </a>
          ).
        </li>
      </ul>
    </div>
  )
}

export default Ethnography
