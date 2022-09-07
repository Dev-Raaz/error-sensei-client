import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// @User defined imports
import { ScrolledContext } from '../context/ScrolledContext'

const BackBtn = ({type}) => {
 
 // @Hooks 
 const scrolled = useContext(ScrolledContext)
 const navigate = useNavigate()

 // Selecting the Fab Btn to indicate scroll
 const FabButton = document.querySelector('.show-scroll')
 if(FabButton !== null)
 FabButton.style.background = `conic-gradient(#45C1EF ${scrolled}%, #FFFFFF ${scrolled}%)`

 // @Function to go back
 const goBack = () => {
    navigate(-1)
 } 

 if(type === 'scroll') {

    return (
        <button className='fab-btn show-scroll'
        onClick={goBack}>
            <div>
                <img src='/res/buttons/back.svg' alt='Back button icon'/>
            </div>
        </button>
    )
 }

 return (
    <button className='fab-btn'
    onClick={goBack}>
        <img src='/res/buttons/back.svg' alt='Back button icon'/>
    </button>    
    )
}

export default BackBtn