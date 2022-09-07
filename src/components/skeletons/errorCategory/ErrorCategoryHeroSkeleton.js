import React from 'react'

// @User defined imports 
import Skeleton from '../Skeleton'
import Shimmer from '../Shimmer'

const ErrorCategoryHeroSkeleton = () => {
  return (
    <div className='error-category-hero-skeleton'>
        <Skeleton type='thumbnail'/>
        <div className='error-category-hero-skeleton-wrapper'>
            <Skeleton type='title'/>
            <Skeleton type='text'/>
            <Skeleton type='text'/>
        </div>

        <Shimmer/>
    </div>
  )
}

export default ErrorCategoryHeroSkeleton