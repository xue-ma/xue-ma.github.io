import React from 'react'

function About() {
  return (
    <div id='about' className='flex flex-col justify-center items-center sm:min-h-screen'>
      {/* <p className='text-2xl md:text-4xl font-bold text-center'>{title}</p> */}

      <p className='my-4'>
        Hello👋! I am an anthropologist of money and finance. Particularly, I'm interested in the
        politics of money and finance. My research is guided by questions regarding the competing
        economic imaginaries about what money and finance is, and how these knowledge and practices
        have defined and shaped our social relations with each other, with market, and with the
        nation-state.
      </p>
      <p className='my-4'>
        Ultimately, my research seeks to answer: what are the possible ways of organizing our
        society in terms of achieving greater equality (of race, gender and class)?
      </p>
    </div>
  )
}

export default About
