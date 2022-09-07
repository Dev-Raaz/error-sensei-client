import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// @User defined imports
import { PostsContext } from '../../context/PostsCotext' 
import PostCard from './PostCard'
import PopularErrorSkeleton from '../skeletons/home/PopularErrorSkeleton'

const PopularErrors = () => {
  // Posts
  const { posts, isLoading } =  useContext( PostsContext )   
  const [ displayPosts, setDisplayPosts ] = useState( 4 )
  const navigate = useNavigate()

  // @Function that shows more posts
  const showMore = () => {

    if(displayPosts + 4 <= posts.length) {
        setDisplayPosts( displayPosts + 4 )
    } else {
        setDisplayPosts(posts.length)
    }
  }


  // Go to component
  const goToError = (location, state)=> {
    navigate(location, {state: state})
  }   


  return (
    <div className='popular-errors'>
        <h1 className='title'>Popular <span>Errors</span></h1>
        <p className='desc'>
        Here are some of the most popular errors solved 
        for you.
        </p>

        {/* Showing the Post Cards */}
        <div className='popular-errors-grid'>
            {
                isLoading
                ? Array(4).fill(0).map((item, i) => <PopularErrorSkeleton key={i}/>)
                : posts.slice(0,displayPosts).map(
                    post => <PostCard key={post.id} post={post} goToError={goToError}/>
                )
            }            
        </div>

        {/* Button */}
        <button 
            id='view-more'
            className={posts.length === displayPosts || posts.length < 4
                       ? 'btn-sec disabled' : 'btn-sec'}
            onClick={showMore}
            disabled={posts.length === displayPosts || posts.length < 4 ? true : false}>
            View More
        </button>
    </div>
  )
}

export default PopularErrors