import React from 'react'

const ErrorHero = ({technology, coverImage, title, description, author, readTime, date}) => {

  // Checking if the fields are okay or still waiting
  if(!technology || !coverImage || !title || !description || !author || !readTime || !date){
    return <h1>Loading . . .</h1>
  }


  return (
    <div className='error-hero'>
        <span className='category-tag'>{technology.name}</span>
        
        {/* Hero Image */}
        <img 
        className='hero-img' 
        src={ coverImage.url || '/res/defaults/defaultBg.svg'} 
        alt={`${title} Page Hero`}/>
        
        {/* Title */}
        <h2>{title}</h2>
        
        {/* Description */}
        <p>{description}</p>

        {/* Author */}

        <div className='author'>
            {/* AVATAR */}
            <img 
              className='avatar' 
              src={author.avatar ? author.avatar.url : '/res/defaults/authorDefault.svg'} 
              alt='Author Avatar'/>
            
            {/* DESCRIPTION */}
            <div className='description'>
              <p className='name'>{author.name}</p>
              
              {/* Timestamps */}
              <div className='timestamps'>

                {/* Last Updated */}
                <div className='posted'>
                  <img src='/res/others/calender.svg' alt='Calender'/>
                  <span>3 Days Ago</span>
                </div>

                {/* Read Time */}
                <div className='read-time'>
                  <img src='/res/others/clock.svg' alt='Clock'/>
                  <span>{readTime}</span>
                </div> 

              </div>
            </div>
        </div>

    </div>
  )
}

export default ErrorHero
