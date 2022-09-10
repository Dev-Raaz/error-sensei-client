import React, { useContext, useEffect, useState } from 'react'
import 
{
  FacebookShareButton, 
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton
} from 'react-share'

// @Context
import { PostContext } from '../../context/PostContext'


const Share = () => {
  const {isLoading} = useContext(PostContext)
  const [URL, setURL] = useState('https://errorsensei.netlify.app')

  // Side Effect
  useEffect(()=>{
    setURL(window.location.href)
  }, [URL])

  // If loading we return null   
  if(isLoading)
    return null

  

  return (
    <div className='share-wrapper'>
        <div className='share'>
            <FacebookShareButton
              title='Here is an interesting post for you'
              url={URL}
            >
              <div className='icon'>
                  <img src='/res/socials/facebook.svg' alt='Facebook Icon'/>
              </div>
            </FacebookShareButton>
            
            <TwitterShareButton
              title='Here is an interesting post for you'
              url={URL}
              quote='Here is a post from errorsensei.netlify.app'
              hashtags={['errorsensei']}
            >
              <div className='icon'>
                <img src='/res/socials/twitter.svg' alt='Facebook Icon'/>
              </div>
            </TwitterShareButton>
            
            <LinkedinShareButton
              title='Here is an interesting post for you'
              url={URL}
            >
              <div className='icon'>
                <img src='/res/socials/linkedin.svg' alt='Facebook Icon'/>
              </div>
            </LinkedinShareButton>

            <EmailShareButton
              title='Here is an interesting post for you'
              url={URL}
            >
              <div className='icon'>
                <img src='/res/socials/email.svg' alt='Facebook Icon'/>
              </div>
            </EmailShareButton>
        </div>
    </div>
  )
}

export default Share