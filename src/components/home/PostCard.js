import React from 'react'

// Directs to the post page
const PostCard = ({post, goToError}) => {
  
  // @Main Component
  return (
    <div className='error-post-card' 
                      onClick={goToError.bind(this, `/${post.technology.slug}/${post.slug}`, post)}
                      >
                    <img src={ post.coverImage.url || '/res/defaults/defaultBg.svg'} 
                    alt='Some Error' />
                    <div className='error-description'>
                        <span className='tag'>{post.technology.name}</span>
                        <p className='title'>{post.title}</p>
                        <p className='desc'>{post.description}</p>
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
                </div>
  )
}

export default PostCard