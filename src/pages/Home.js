import React from 'react'

//@User defined imports
import ErrorCategories from '../components/home/ErrorCategories'
import PopularErrors from '../components/home/PopularErrors'

const Home = () => {
  return (
    <main>
        <ErrorCategories/>
        <PopularErrors/>
    </main>
  )
}

export default Home