import { createContext, useContext } from 'react';

export const SeccionAlumnosContext = createContext();

export const useSeccionAlumnosAuth = () => {
    const context = useContext(SeccionAlumnosContext);
    if(!context) throw new Error("useSeccionAlumnosAuth must be used within an SeccionAlumnosProvider");
    return context;
}