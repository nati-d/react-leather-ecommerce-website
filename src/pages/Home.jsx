import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Trending from '../components/Trending'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='my-5 w-full px-4 space-y-6'>
      <Hero/>
      <Services/>
      <About/>
      <Categories/>
      <Trending/>
    </div>
  )
}

export default Home
