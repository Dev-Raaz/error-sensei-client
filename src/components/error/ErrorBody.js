import React, { useContext } from 'react'
import parse from 'html-react-parser'

// @Contexts
import { PostContext } from '../../context/PostContext'


const ErrorBody = () => {

  // Getting PostContext
  const {post, isLoading} = useContext(PostContext)

  if(isLoading || post === null)
    return null

  return (
    <div className='error-body'>
      {parse(post.content.html)}
    </div>
  )
}

export default ErrorBody