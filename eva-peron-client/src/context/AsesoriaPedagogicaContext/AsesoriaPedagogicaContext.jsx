import { createContext, useContext } from 'react';

export const AsesoriaPedagogicaContext = createContext();

export const useAsesoriaPedagogicaAuth = () => {
    const context = useContext(AsesoriaPedagogicaContext);
    if(!context) throw new Error("useAsesoriaPedagogicaAuth must be used within an AsesoriaPedagogicaProvider");
    return context;
}