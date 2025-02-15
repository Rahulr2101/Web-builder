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
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
        ghost: "text-gray-700 hover:bg-gray-200",
        baseStyles: "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"
      };
  return (
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={`${baseStyles} ${variants["default"]} ${variants[baseStyles]}`}
    >
      <Icon className ="h-8 w-8 text-slate-700 cursor-grab"/>
      <p className="text-xs text-white">{label}</p>
    </button>
  )
}


export const SidarBtnElementDragOverlay = ({webElement}) => {
    const {label,icon:Icon} = webElement.designerBtnElement
    
  return (
    <Button variant = {"outline"} className="flex flex-col gap-2 h-[120px] w-[120px ] cursor-grab ">
        <Icon className ="h-8 w-8 text-slate-700 cursor-grab"/>
        <p className='text-xs'>{label}</p>
    </Button>
  )
}
