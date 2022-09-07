import React, { useContext } from 'react'

// @User defined imports
import { TechnologiesContext } from '../../context/TechnlogiesContext'
import CategorySkeleton from '../skeletons/home/CategorySkeleton'

const ErrorCategories = () => {
  // Getting the context value
  const { technologies, isLoading } = useContext(TechnologiesContext)

  // @Main Component
  return (
    <div className='categories-grid'>
      {

        isLoading ?
          Array(10).fill(0).map((item, i) => <CategorySkeleton key={i}/>)
        :
        technologies.map(tech => (
          <a key={tech.id} className='cat-card' href={`/${tech.slug}`}>
            <span>{tech.posts.length} Errors</span>
            <img src={tech.icon.url || '/res/defaults/defaultBg.svg'} alt={tech.name + ' Icon'}/>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </a>
        ))
      }
    </div>
  )
}

export default ErrorCategories