import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'
import Button from './Button';
import { useDesigner } from './hooks/useDesigner';


export const SidarBtnElement = ({webElement}) => {
    const {label,icon:Icon} = webElement.designerBtnElement
    const draggable = useDraggable({
        id: `designer-btn-${webElement.type}`,
        data:{
            type:webElement.type,
            isDesignerBtnElement:true,
        }
    })
   
  return (
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={`flex flex-col max-w-20 gap-2 items-center justify-center`}
    >
      <Icon className =" text-slate-700 cursor-grab bg-accent rounded-md w-10 h-10 "/>
      <p className="text-xs text-white text-center">{label}</p>
    </button>
  )
}


export const SidarBtnElementDragOverlay = ({webElement}) => {
  console.log(webElement)
    const {label,icon:Icon} = webElement.designerBtnElement
    
  return (
    <button
    className={`flex flex-col max-w-20 gap-2`}
  >
    <Icon className =" text-slate-700 cursor-grab bg-accent rounded-md w-10 h-10 "/>
    <p className="text-xs text-white text-center">{label}</p>
  </button>
  )
}
