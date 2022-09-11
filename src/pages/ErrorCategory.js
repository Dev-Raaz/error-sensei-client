import React from 'react'

// @User defined imports
import ErrorCategoryHero from '../components/errorCategory/ErrorCategoryHero'
import CategoryErrors from '../components/errorCategory/CategoryErrors'
import TechnologyProvider from '../context/TechnologyContext'

import BackBtn from '../components/BackBtn'

// Main Component


const ErrorCategory = () => {
  
  return (
    <TechnologyProvider>
      <main className='error-category'>
        <ErrorCategoryHero/>
        <CategoryErrors/>
        <BackBtn type='scroll'/>
      </main>
    </TechnologyProvider>
  )
}

export default ErrorCategory