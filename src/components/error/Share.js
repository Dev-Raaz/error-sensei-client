import React, { useContext, useEffect, useState } from 'react'
import { isDesktop } from 'react-device-detect'

import { RWebShare } from 'react-web-share'

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
            <RWebShare
              data={
                {
                  text:"Here is a new post from Error Sensei",
                  url: URL,
                  title: "Post from Error Sensei"
                }
              }
              sites={['facebook', 'twitter', 'linkedin', 'mail']}
              disableNative={isDesktop}
            >
              <div className='icon'>
                  <img src='/res/socials/share.svg' alt='Share Icon'/>
              </div>
            </RWebShare>
        </div>
    </div>
  )
}

export default Share