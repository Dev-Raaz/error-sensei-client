import React from 'react'

const RelatedPosts = () => {
  return (
    <div className='popular-errors'>
        <h1 className='title'>Popular <span>Errors</span></h1>
        <p className='desc'>
        Here are some of the most popular errors solved 
        for you.
        </p>

        <div className='popular-errors-grid'>
            <a className='error-post-card' href='/reactjs/why-do-i-see-an-empty-screen'>
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
            </a>

            <a className='error-post-card' href='/reactjs/why-do-i-see-an-empty-screen'>
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
            </a>         
        </div>
    </div>
  )
}

export default RelatedPosts