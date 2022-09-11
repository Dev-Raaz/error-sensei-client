// Library imports
import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// @User defined imports
import { getTechnology } from '../utils/graphCMS'

// Creating and exporting the context
export const TechnologyContext = createContext()

const TechnologyProvider = ({ children }) => {

  // Sets the loading
  const [technology, setTechnology] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Getting the location
  const {pathname} = useLocation()

  useEffect(()=>{
    const slug = pathname.split('/')[1]

    try{
      getTechnology(slug, setTechnology, setIsLoading)
    }catch(err){
      console.log(`Error: ${err}`)
    }

  }, [pathname])

  
  return (
    <TechnologyContext.Provider value={{technology, isLoading}}>
        {children}
    </TechnologyContext.Provider>
  )
}

export default TechnologyProvider