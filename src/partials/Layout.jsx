import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from '../partials/Card'

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])
  return (
    <div className='min-h-screen w-full sm:px-5 bg-gray-100' id='home'>
      <div class='flex flex-col sm:flex-row '>
        <aside data-aos='fade-down' data-aos-duration='800' class='sm:h-screen sm:sticky top-0'>
          <Card />
        </aside>
        <main
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-delay='400'
          className='max-w-4xl text-lg text-gray-600 leading-relaxed mx-4 sm:ml-8'
        >
          {children}
        </main>
      </div>
    </div>
  )
}
