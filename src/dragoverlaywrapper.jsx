import { DragOverlay, useDndMonitor} from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import { SidarBtnElement, SidarBtnElementDragOverlay } from './SidarBtnElement';
import { WebElement } from './Webelement';
import { useDesigner } from './hooks/useDesigner';

export const DragOverlayWrapper = () => {
    const {elements,flexCol}  = useDesigner()
    const[draggedItem,setDraggedItem] = useState(null);
    useDndMonitor ({
        onDragStart:(event) =>{
           setDraggedItem(event.active)
        },
        onDragCancel:()=>{
            setDraggedItem(null)
        },
        onDragEnd:()=>{
            setDraggedItem(null)
        }
    })
    let node = <div>No drag overlay</div>
    if (!draggedItem) return null;
    const isSidebarbtnElement = draggedItem.data?.current?.isDesignerBtnElement;
    if(isSidebarbtnElement){
        const type = draggedItem.data?.current?.type
        node = <SidarBtnElementDragOverlay webElement={WebElement[type]}/>
    }
    const isDesignerElement = draggedItem.data?.current?.isDesignerElement;
    if(isDesignerElement){
      const elementId = draggedItem.data?.current?.elementId 
      const parentId  = draggedItem.data?.current?.parent
      const element = parentId === '0'? elements.find((e)=> e.id === elementId):flexCol[parentId].find((e)=>e.id===elementId)
      console.log(elementId,parentId,element)
      const DesignerComponents = WebElement[element.type].designerComponent
      node = <DesignerComponents WebInstance = {element}/>
    }
    
    
  return (
    <DragOverlay>{node}</DragOverlay>
  )
}
