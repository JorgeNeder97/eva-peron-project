import { createContext, useContext } from 'react';

export const SecretariaContext = createContext();

export const useSecretariaAuth = () => {
    const context = useContext(SecretariaContext);
    if(!context) throw new Error("useSecretariaAuth must be used within an SecretariaProvider");
    return context;
}