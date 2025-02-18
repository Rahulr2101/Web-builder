import { createContext, useState } from "react";

export const DesignerContext = createContext(null);


export default function DesignerContextProvider({children}){
    const [elements,setElements] = useState([]);
    const [selectedElement,setSelectedElement] = useState(null)
    const [flexCol,setFlexCol] = useState({})
    const removeElement = (id) =>{
        setElements((prev)=>prev.filter((element)=>element.id !== id));
    }
    const removeElementCol = (parentId, childId) => {
        setFlexCol((prev) => {
            const newFlexCol = { ...prev };
            if (!newFlexCol[parentId]) newFlexCol[parentId] = []; 
            const updatedCol = newFlexCol[parentId].filter((element) => element.id !== childId);
            newFlexCol[parentId] = updatedCol;
            return newFlexCol; 
        });
    };
    const addFlexColElement = (id, index, element) => {
        setFlexCol(prev => {
            const newFlexCol = { ...prev };
            if (!newFlexCol[id]) newFlexCol[id] = []; 
            
            const updatedElements = [...newFlexCol[id]];
            updatedElements.splice(index, 0, element); 
    
            newFlexCol[id] = updatedElements;
            return newFlexCol;
        });
    };
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

   
    return <DesignerContext.Provider value={{elements,addElement,removeElement,selectedElement,setSelectedElement,updateElement,flexCol,setFlexCol,addFlexColElement,removeElementCol}}>{children}</DesignerContext.Provider>
}