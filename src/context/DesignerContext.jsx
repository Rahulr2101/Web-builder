import { createContext } from "react";
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
  const files = useSelector((state) => state.files.files);

  // Assuming elements and flexCol belong to the first file (modify as needed)
  const selectedFilePath = files.length > 0 ? files[0].path : null;

  const elements = selectedFilePath ? files.find(file => file.path === selectedFilePath)?.designer?.elementCol || [] : [];

  const flexCol = selectedFilePath ? files.find(file => file.path === selectedFilePath)?.designer?.flexCol || {} : {};

  const handleAddElement = ( index, element) => {
 
    dispatch(addElement({ filePath, element, index }));
  };

  const handleRemoveElementFlex = (filePath, elementId, parentId) => {
    dispatch(removeElementFlex({ filePath, elementId, parentId }));
  };

  const handleUpdateElement = (filePath, id, element) => {
    dispatch(updateElement({ filePath, id, element }));
  };

  const handleRemoveElement = (filePath, elementId) => {
    dispatch(removeElement({ filePath, elementId }));
  };

  const handleRemoveElementCol = (filePath, parentId) => {
    dispatch(removeElementCol({ filePath, parentId }));
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        flexCol,
        addElement: handleAddElement,
        removeElement: handleRemoveElement,
        removeElementFlex: handleRemoveElementFlex,
        updateElement: handleUpdateElement,
        addFlexColElement: (filePath, element, index, parentId) => 
          dispatch(addFlexColElement({ filePath, element, index, parentId })),
        removeElementCol: handleRemoveElementCol,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
