import React, { useState, useContext } from 'react'

// @User defined imports
import { PostsContext } from '../../context/PostsCotext' 
import ErrorsSkeleton from '../skeletons/home/PopularErrorSkeleton'

// Context Imports
import { TechnologyContext } from '../../context/TechnologyContext'


// @Error Card
const ErrorCard = ({post}) => {

    return (
        <a className='error-post-card' href={`/${post.technology.slug}/${post.slug}`}>
                    <img src={post.coverImage.url} alt='Some Error' />
                    <div className='error-description'>
                        <span className='tag'>React JS</span>
                        <p className='title'>{post.title}</p>
                        <p className='desc'>{post.description}</p>

                        <div className='timestamps'>
                            <div className='posted'>
                                <img src='/res/others/calender.svg' alt='Calender'/>
                                <span>3 Days Ago</span>
                            </div>

                            <div className='read-time'>
                                <img src='/res/others/clock.svg' alt='Clock'/>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </a>
    )
}


const CategoryErrors = () => {
  // Posts
  const {posts} =  useContext( PostsContext )   
  const [ displayPosts, setDisplayPosts ] = useState( 4 )

  const {technology, isLoading} = useContext(TechnologyContext)
  
  // Loading . . .
  if(isLoading)
    return null


  // @Show more
  const showMore = () => {

    if(displayPosts + 4 <= posts.length) {
        setDisplayPosts( displayPosts + 4 )
    } else {
        setDisplayPosts(posts.length)
    }
  }

  // Main Component   
  return (
    <div className='popular-errors'>
        <h1 className='title'><span>All </span> Errors</h1>

        <div className='popular-errors-grid'>
            {   
                isLoading
                ? 
                Array(4).fill(0).map(post => <ErrorsSkeleton/>)
                : 
                technology.posts.length >= 4
                ? 
                technology.posts.slice(0,displayPosts).map(post => 
                                                       <ErrorCard
                                                       post={post} key={post.id}/>)
                : 
                technology.posts.map(post => <ErrorCard 
                                              post={post} key={post.id}/>)
            }            
        </div>

        {/* Button */}
        <button 
        id='view-more'
        className={
            technology.posts.length === displayPosts || technology.posts.length <= 4 
            ? 'btn-sec disabled' : 'btn-sec'
            }
        onClick={showMore}
        disabled={technology.posts.length === displayPosts || 
                  technology.posts.length <= 4 ? true : false}>
            View More
        </button>
    </div>
  )
}

export default CategoryErrors