import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

// @User defined imports
import ErrorCategoryHeroSkeleton from '../skeletons/errorCategory/ErrorCategoryHeroSkeleton'
import Error404 from '../../pages/Error404'

// Context imports
import { TechnologyContext } from '../../context/TechnologyContext'

const ErrorCategoryHero = ({ name }) => {

  // Loading . . .
  const {technology, isLoading} = useContext(TechnologyContext)

  if(isLoading)
    return <ErrorCategoryHeroSkeleton/>
  if(technology === null)
    return <Error404/>

  return (
    <>
      <Helmet>
        <title>{technology.name}</title>
        <meta name='description' content={technology.description}/>
      </Helmet>
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
    </>
  )
}

export default ErrorCategoryHero