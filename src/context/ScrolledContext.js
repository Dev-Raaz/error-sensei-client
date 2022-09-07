import { createContext, useState } from "react";

// Initializing the Context
export const ScrolledContext = createContext()

const ScrolledProvider = ({ children }) => {

    const [scrolled, setScrolled] = useState(0)

    window.onscroll = () => scrollIndicate()

    // Sets how much the user has scrolled
    const scrollIndicate = () => {
        // How much from top
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop
        // Total page height
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        var scrolled = (winScroll/height) * 100

        setScrolled(scrolled.toFixed(0))
    }

    return (
        <ScrolledContext.Provider value={scrolled}>
            {children}
        </ScrolledContext.Provider>
    )
}

export default ScrolledProvider