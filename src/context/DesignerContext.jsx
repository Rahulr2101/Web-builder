import { createContext,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  addElement, 
  removeElementFlex, 
  updateElement, 
  addFlexColElement, 
  removeElement, 
  removeElementCol 
} from "../feature/filesSlice";

export const DesignerContext = createContext(null);
export const filePath ='home'
export default function DesignerContextProvider({ children }) {
  const dispatch = useDispatch();
  const [selectedElement,setSelectedElement] = useState(null)
  
  const files = useSelector((state) => state.files.files);

  const selectedFilePath = files.length > 0 ? files[0].path : null;

  const elements = selectedFilePath ? files.find(file => file.path === selectedFilePath)?.designer?.elementCol || [] : [];

  const flexCol = selectedFilePath ? files.find(file => file.path === selectedFilePath)?.designer?.flexCol || {} : {};
  const handleAddElement = ( index, element) => {
    dispatch(addElement({ filePath, element, index }));
  };
  const handleRemoveElementFlex = (elementId, parentId) => {
    dispatch(removeElementFlex({ filePath, elementId, parentId }));
  };
  const handleUpdateElement = ( id, element) => {
    dispatch(updateElement({ id, element }));
  };

  const handleRemoveElement = (id) => {
    dispatch(removeElement({ filePath, id }));
  };

  const handleRemoveElementCol = (parentId, childId) => {
    dispatch(removeElementCol({ filePath, parentId,childId }));
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        flexCol,
        addElement: handleAddElement,
        setSelectedElement,
        selectedElement,
        removeElement: handleRemoveElement,
        removeElementFlex: handleRemoveElementFlex,
        updateElement: handleUpdateElement,
        addFlexColElement: ( id, index, element) => 
          dispatch(addFlexColElement({ filePath, element, index, id })),
        removeElementCol: handleRemoveElementCol,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
