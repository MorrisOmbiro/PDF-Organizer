import React, { useEffect, useState, createContext } from 'react';

export const ViewportContext = createContext({});

export const ViewportProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <ViewportContext.Provider value={{width, height}}>
            {children}
        </ViewportContext.Provider>
    )
} 



// Dimensions is subscribed to context changes 
export default ViewportProvider;