import React from 'react'

// @User defined imports
import Skeleton from '../Skeleton'
import Shimmer from '../Shimmer'

const CategorySkeleton = () => {
  return (
    <div className='category-skeleton'>
        <Skeleton type='thumbnail'/>
        <Skeleton type='title'/>
        <Skeleton type='text'/>
        
        <Shimmer/>
    </div>
  )
}

export default CategorySkeleton