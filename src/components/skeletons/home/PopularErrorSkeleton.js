import React from 'react'
import Shimmer from '../Shimmer'

// @User defined imports
import Skeleton from '../Skeleton'


const PopularErrorSkeleton = () => {
  return (
    <div className='popular-error-skeleton'>
        <Skeleton type='thumbnail'/>
        <div className='popular-error-skeleton-details'>
            <Skeleton type='tag'/>
            <Skeleton type='title'/>
            <Skeleton type='text'/>
            <Skeleton type='text'/>
        </div>

        <Shimmer />
    </div>
  )
}

export default PopularErrorSkeleton