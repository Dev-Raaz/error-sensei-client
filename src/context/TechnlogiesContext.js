import { createContext, useState, useEffect } from "react"

// @User defined Imports
import {getTechnologies} from '../utils/graphCMS'

export const TechnologiesContext = createContext()

const TechnologiesProvider = ({ children }) => {
    
    // Posts 
    const [ technologies, setTechnologies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    // UseEffect hook runs once when the component loads
    useEffect(()=>{
        // Runs once when the component renders
        try{
            //Gets the technlogies and sets the loading
            getTechnologies(setTechnologies, setIsLoading)
        }catch(err){
            console.log(err)
        }
    },[])

    
    // Context Provider
    return (
        <TechnologiesContext.Provider value={{technologies, isLoading}}>
            { children }
        </TechnologiesContext.Provider>
    )
}

export default TechnologiesProvider