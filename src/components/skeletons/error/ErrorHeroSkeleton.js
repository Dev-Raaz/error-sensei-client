import React from 'react'

// @User defined imports
import Skeleton from '../Skeleton'
import Shimmer from '../Shimmer'

const ErrorHeroSkeleton = () => {
  return (
    <div className='error-hero-skeleton'>
        <Skeleton type='thumbnail'/>
        <Skeleton type='title'/>
        <Skeleton type='text'/>
        <Skeleton type='text'/>

        <div className='author-skeleton'>
            <Skeleton type='avatar'/>
            <Skeleton type='text'/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default ErrorHeroSkeleton