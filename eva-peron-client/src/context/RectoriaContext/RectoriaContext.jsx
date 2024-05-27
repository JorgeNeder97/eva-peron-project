import { createContext, useContext } from 'react';

export const RectoriaContext = createContext();

export const useRectoriaAuth = () => {
    const context = useContext(RectoriaContext);
    if(!context) throw new Error("useRectoriaAuth must be used within an RectoriaProvider");
    return context;
}