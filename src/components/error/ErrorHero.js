import React, {useContext} from 'react'
import {Helmet} from 'react-helmet'

// @Context
import { PostContext } from '../../context/PostContext'

// @Skeleton
import ErrorHeroSkeleton from '../skeletons/error/ErrorHeroSkeleton'
import Error404 from '../../pages/Error404'

const ErrorHero = ({date}) => {

  
  // Getting PostContext
  const {post, isLoading} = useContext(PostContext)

  // Checking Loading
  if(isLoading)
    return <ErrorHeroSkeleton/>

  if(post === null)
    return <Error404/>
  
  const {coverImage, technology, title, description, author, readTime} = post
  

  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
      </Helmet>

      <div className='error-hero'>
        <span className='category-tag'>{technology.name}</span>
        
        {/* Hero Image */}
        <img 
        className='hero-img' 
        src={ coverImage.url || '/res/defaults/defaultBg.svg'} 
        alt={`${title} Page Hero`}/>
        
        {/* Title */}
        <h1>{title}</h1>
        
        {/* Description */}
        <p>{description}</p>

        {/* Author */}
        <div className='author'>
            {/* AVATAR */}
            <img 
              className='avatar' 
              src={author.avatar ? author.avatar.url : '/res/defaults/authorDefault.svg'} 
              alt='Author Avatar'/>
            
            {/* DESCRIPTION */}
            <div className='description'>
              <p className='name'>{author.name}</p>
              
              {/* Timestamps */}
              <div className='timestamps'>

                {/* Last Updated */}
                <div className='posted'>
                  <img src='/res/others/calender.svg' alt='Calender'/>
                  <span>3 Days Ago</span>
                </div>

                {/* Read Time */}
                <div className='read-time'>
                  <img src='/res/others/clock.svg' alt='Clock'/>
                  <span>{readTime}</span>
                </div> 

              </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default ErrorHero
