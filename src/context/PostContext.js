import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

// @User defined imports
import { getPost } from "../utils/graphCMS";

// Creating and exporting the Post Context
export const PostContext = createContext()


// Post context provider
const PostProvider = ( { children } ) => {
    
    // Initial State
    const [ post, setPost ] = useState(null)
    const [isLoading, setIsLoading ] = useState(true)

    const {pathname} = useLocation()

    // Use Effect
    useEffect( () => {
        const slug = pathname.split('/')[2]
        // Runs once when the component renders
        try{
            getPost(slug, setPost, setIsLoading)
        }catch(err){
            console.log(err)
        }
    }, [pathname])

    // Get Post
    return (
        <PostContext.Provider value={{post, isLoading}}>
            {children}
        </PostContext.Provider>
    )
}

// Exporting the post provider
export default PostProvider