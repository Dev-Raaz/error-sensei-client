import React, { useState, useContext } from 'react'

// @User defined imports
import { PostsContext } from '../../context/PostsCotext' 
import ErrorsSkeleton from '../skeletons/home/PopularErrorSkeleton'

const CategoryErrors = ({name, slug, isLoading}) => {
  // Posts
  const {posts} =  useContext( PostsContext )   
  const [ displayPosts, setDisplayPosts ] = useState( 4 )

  isLoading = true


  // @Use Effect
  const showMore = () => {

    if(displayPosts + 4 <= posts.length) {
        setDisplayPosts( displayPosts + 4 )
    } else {
        setDisplayPosts(posts.length)
    }
  }

  return (
    <div className='popular-errors'>
        <h1 className='title'><span>All </span> Errors</h1>

        <div className='popular-errors-grid'>
            {   
                isLoading
                ? Array(4).fill(0).map(post => <ErrorsSkeleton/>)
                : posts.slice(0,displayPosts).map(post => 
                <a key={post.id} className='error-post-card' href='/'>
                    <img src='/res/defaults/defaultBg.svg' alt='Some Error' />
                    <div className='error-description'>
                        <span className='tag'>React JS</span>
                        <p className='title'>Why do I See an Empty screen even after my code has been 
                        compiled in React Native</p>
                        <p className='desc'>The programming language of the web.</p>

                        <div className='timestamps'>
                            <div className='posted'>
                                <img src='/res/others/calender.svg' alt='Calender'/>
                                <span>3 Days Ago</span>
                            </div>

                            <div className='read-time'>
                                <img src='/res/others/clock.svg' alt='Clock'/>
                                <span>12 Mins</span>
                            </div>
                        </div>
                    </div>
                </a>)
            }            
        </div>

        <button 
        id='view-more'
        className={
            posts.length === displayPosts || posts.length <= 4 
            ? 'btn-sec disabled' : 'btn-sec'
            }
        onClick={showMore}
        disabled={posts.length === displayPosts || posts.length <= 4 ? true : false}>
            View More
        </button>
    </div>
  )
}

export default CategoryErrors