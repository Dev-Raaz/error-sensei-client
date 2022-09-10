// Testing
import React, { createContext, useState } from 'react'

// Creating and exporting the context
export const TechnologyContext = createContext()

const TechnologyProvider = ({ children }) => {
   
  const [posts, setPosts] = useState([])
  const [slug, setSlug] = useState()
  
  return (
    <TechnologyContext.Provider>
        {children}
    </TechnologyContext.Provider>
  )
}

export default TechnologyProvider