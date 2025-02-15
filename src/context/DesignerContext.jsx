import { createContext, useState } from "react";

export const DesignerContext = createContext(null);


export default function DesignerContextProvider({children}){
    const [elements,setElements] = useState([]);
    const [selectedElement,setSelectedElement] = useState(null)
    const removeElement = (id) =>{
        setElements((prev)=>prev.filter((element)=>element.id !== id));
    }

    const addElement = (index,elements) =>{
        setElements(prev =>{
            const newElements = [...prev]
            newElements.splice(index,0,elements)
            return newElements
        })
    }

    const updateElement = (id,element) =>{
       setElements(prev =>{
        const newElement = [...prev]
        const index = newElement.findIndex(el=>el.id === id)
        newElement[index] = element
        return newElement
       })
    }

   
    return <DesignerContext.Provider value={{elements,addElement,removeElement,selectedElement,setSelectedElement,updateElement}}>{children}</DesignerContext.Provider>
}