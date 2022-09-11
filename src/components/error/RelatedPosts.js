import React, { useContext } from 'react'
import { PostContext } from '../../context/PostContext'

const RelatedPost = ({relatedPost}) => {

    console.log(relatedPost)

    return (
        <a className='error-post-card' 
         href={`/${relatedPost.technology.slug}/${relatedPost.slug}`}>
                <img 
                src={relatedPost.coverImage.url || '/res/defaults/defaultBg.svg'} 
                alt='Some Error' />
                <div className='error-description'>
                    <span className='tag'>React JS</span>
                    <p className='title'>{relatedPost.title}</p>
                    <p className='desc'>{relatedPost.description}</p>

                    <div className='timestamps'>
                        <div className='posted'>
                            <img src='/res/others/calender.svg' alt='Calender'/>
                            <span>3 Days Ago</span>
                        </div>

                        <div className='read-time'>
                            <img src='/res/others/clock.svg' alt='Clock'/>
                            <span>{relatedPost.readTime}</span>
                        </div>
                    </div>
                </div>
        </a>
    )
}

const RelatedPosts = () => {
  //    
  const { post, isLoading } = useContext(PostContext)

  // If loading   
  if(isLoading || post === null)
    return null

  return (
    <div className='popular-errors'>
        <h1 className='title'>Related <span>Errors</span></h1>
        <p className='desc'>
        Here are some other errors that you might wanna look up.
        </p>

        <div className='popular-errors-grid'>
            {
                post.relatedPosts.map(relatedPost => <RelatedPost 
                                                      key={relatedPost.id} 
                                                      relatedPost={relatedPost}
                                                      />)
            }     
        </div>
    </div>
  )
}

export default RelatedPosts