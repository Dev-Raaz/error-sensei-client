import { createContext, useState, useEffect } from "react"

// @User defined Imports
import {getPosts} from '../utils/graphCMS'

// Initilizing the Context
export const PostsContext = createContext()

const PostsProvider = ({ children }) => {
    
    // Posts 
    const [ posts, setPosts ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    // Making API calls
    useEffect(()=>{
        // Runs once when the component renders
        try{
            getPosts(setPosts, setIsLoading)
        }catch(err){
            console.log(err)
        }
    },[])

    // @Main Component 
    return (
        <PostsContext.Provider value={{ posts, isLoading }}>
            { children }
        </PostsContext.Provider>
    )
}

export default PostsProvider