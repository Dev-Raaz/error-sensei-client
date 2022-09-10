import React from 'react'
import {useLocation} from 'react-router-dom'

// @User defined imports
import ErrorCategoryHero from '../components/errorCategory/ErrorCategoryHero'
import CategoryErrors from '../components/errorCategory/CategoryErrors'
import TechnologyProvider from '../context/TechnologyContext'

import BackBtn from '../components/BackBtn'

// Main Component
const ErrorCategory = () => {

  let {pathname} = useLocation()
  let copyPathname = pathname[1].toUpperCase() + pathname.substring(2)

  return (
    <TechnologyProvider>
      <main className='error-category'>
        <ErrorCategoryHero name={copyPathname}/>
        <CategoryErrors name={copyPathname} slug={pathname.substring(1)}/>
        <BackBtn type='scroll'/>
      </main>
    </TechnologyProvider>
  )
}

export default ErrorCategory