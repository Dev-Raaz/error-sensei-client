// ?Testing
import React, { createContext, useState } from 'react'

// Creating and exporting the context
export const TechnologyPostsContext = createContext()

const TechnlogyPostsContextProvider = ( { children } ) => {
   
  const [posts, setPosts] = useState([])
  const [slug, setSlug] = useState()
  

  return (
    <TechnologyPostsContext.Provider>
        {children}
    </TechnologyPostsContext.Provider>
  )
}

export default TechnlogyPostsContextProvider