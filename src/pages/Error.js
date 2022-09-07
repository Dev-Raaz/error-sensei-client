import React from 'react'
import { useLocation } from 'react-router-dom'

// @User defined imports
import ErrorHero from '../components/error/ErrorHero'
import ErrorBody from '../components/error/ErrorBody'
import Share from '../components/error/Share'
import RelatedPosts from '../components/error/RelatedPosts'

// Contexts
import PostsProvider from '../context/PostsCotext'

import BackBtn from '../components/BackBtn'
import ErrorHeroSkeleton from '../components/skeletons/error/ErrorHeroSkeleton'

const Error = ({ isLoading }) => { 

  isLoading = true
  // The state variable holds the current post 
  const {state} = useLocation()

  // @Test
  // console.log(`From Error Page . . .`)
  // console.log(state)

  if(isLoading)
    return <ErrorHeroSkeleton/>

  return (
    <PostsProvider>
      <main>
        <ErrorHero {...state}/>
        <ErrorBody/>
        <Share/>
        <RelatedPosts/>
        <BackBtn type='scroll'/>
      </main>
    </PostsProvider>
  )
}

export default Error