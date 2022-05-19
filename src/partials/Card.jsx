import React from 'react'
import { FaAt } from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

function Card() {
  return (
    <div className='pt-10 m-4 w-64 mx-auto'>
      <div className='flex flex-col justify-center  mx-auto bg-white shadow-xl rounded-xl p-5 '>
        <div className='mx-auto select-none'>
          <StaticImage
            placeholder='none'
            loading='eager'
            width={150}
            src='../images/profile.png'
            alt='Profile face'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl font-semibold text-gray-900'>Xue Ma (She/Her)</p>
          <div className='text-xs sm:text-sm text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            <p>PhD Student in Anthropology</p>
            <p>University of Victoria</p>
            <p>
              Email: xuema
              <FaAt className='inline' />
              uvic.ca
            </p>
          </div>

          <div className='flex flex-col align-center justify-center mt-4 '>
            <AnchorLink to='/#home' title='Home' className='hover:font-bold' />
            <AnchorLink to='/#research' title='Research' className='hover:font-bold' />
            <AnchorLink to='/#ethnography' title='Ethnography' className='hover:font-bold' />
            <AnchorLink to='/#teaching' title='Teaching' className='hover:font-bold' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
