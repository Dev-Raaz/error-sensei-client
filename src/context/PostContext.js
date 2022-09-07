import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

// @User defined imports
import { getPost } from "../utils/graphCMS";

// Creating and exporting the Post Context
export const PostContext = createContext()
export const GetPostContext = createContext()


// Post context provider
const PostProvider = ( { children } ) => {
    
    // Initial State
    const [ post, setPost ] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const location = useLocation()

    // Use Effect
    useEffect( () => {
        console.log(location)
    } )

    // Get Post
    return (
        <PostContext.Provider value={{post, isLoading}}>
            {children}
        </PostContext.Provider>
    )
}

// Exporting the post provider
export default PostProvider