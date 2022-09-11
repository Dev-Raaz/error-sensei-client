import React, { useContext } from 'react'

// @User defined imports
import ErrorCategoryHeroSkeleton from '../skeletons/errorCategory/ErrorCategoryHeroSkeleton'

// Context imports
import { TechnologyContext } from '../../context/TechnologyContext'

const ErrorCategoryHero = ({ name }) => {

  // Loading . . .
  const {technology, isLoading} = useContext(TechnologyContext)

  if(isLoading)
    return <ErrorCategoryHeroSkeleton/>

  return (
    <div className='error-category-hero'>
        <img 
        src={technology.icon.url || '/res/defaults/defaultBg.svg'} 
        alt='Error Category Hero'/>
        <div className='error-category-description'>
            <h1 className='top-mar-0 title'>
                <span>{technology.name} </span>
                Errors
            </h1>
            <p>Here we have listed the solution for different errors in {technology.name}.</p>
        </div>
    </div>
  )
}

export default ErrorCategoryHero