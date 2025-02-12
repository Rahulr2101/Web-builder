import { createContext, useState } from "react";

export const DesignerContext = createContext(null);


export default function DesignerContextProvider({children}){
    const [elements,setElements] = useState([]);
    const addElement = (index,elements) =>{
        setElements(prev =>{
            const newElements = [...prev]
            newElements.splice(index,0,elements)
            return newElements
        })
    }
    return <DesignerContext.Provider value={{elements,addElement}}>{children}</DesignerContext.Provider>
}