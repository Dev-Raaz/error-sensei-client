import React from 'react'
import { useLocation } from 'react-router-dom'

// @User defined imports
import ErrorHero from '../components/error/ErrorHero'
import ErrorBody from '../components/error/ErrorBody'
import Share from '../components/error/Share'
import RelatedPosts from '../components/error/RelatedPosts'

// Contexts
import PostProvider from '../context/PostContext'

import BackBtn from '../components/BackBtn'

const Error = () => { 
  // The state variable holds the current post 
  const {state} = useLocation()

  // Getting the post from the post context
  // const {post, isLoading} = useContext(PostContext)

  // @Test
  // console.log(`From Error Page . . .`)
  // console.log(state)

  return (
    <PostProvider>
      {
        <main>
          <ErrorHero {...state}/>
          <ErrorBody/>
          <Share/>
          <RelatedPosts/>
          <BackBtn type='scroll'/>
        </main>
      }
    </PostProvider>
  )
}

export default Error