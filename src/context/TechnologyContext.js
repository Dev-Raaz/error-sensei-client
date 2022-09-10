// Testing
import React, { createContext } from 'react'

// Creating and exporting the context
export const TechnologyContext = createContext()

const TechnologyProvider = ({ children }) => {
  
  return (
    <TechnologyContext.Provider>
        {children}
    </TechnologyContext.Provider>
  )
}

export default TechnologyProvider