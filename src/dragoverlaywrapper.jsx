import { DragOverlay, useDndMonitor} from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import { SidarBtnElement, SidarBtnElementDragOverlay } from './SidarBtnElement';
import { WebElement } from './Webelement';

export const DragOverlayWrapper = () => {
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
    
  return (
    <DragOverlay>{node}</DragOverlay>
  )
}
