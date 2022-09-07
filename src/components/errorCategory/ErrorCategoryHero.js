import React from 'react'

// @User defined imports
import ErrorCategoryHeroSkeleton from '../skeletons/errorCategory/ErrorCategoryHeroSkeleton'

const ErrorCategoryHero = ({ name, isLoading }) => {

  isLoading = true

  if(isLoading)
    return <ErrorCategoryHeroSkeleton/>

  return (
    <div className='error-category-hero'>
        <img src='/res/defaults/defaultBg.svg' alt='Error Category Hero'/>
        <div className='error-category-description'>
            <h1 className='top-mar-0 title'>
                <span>{name} </span>
                Errors
            </h1>
            <p>Here we have listed the solution for different errors in {name}.</p>
        </div>
    </div>
  )
}

export default ErrorCategoryHero