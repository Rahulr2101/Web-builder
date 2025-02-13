import React, { useState } from 'react'
import { Siderbar } from './sidebar'
import { useDndMonitor, useDraggable, useDroppable } from '@dnd-kit/core'
import { useDesigner } from './hooks/useDesigner'; 
import { WebElement } from './Webelement';
import { idGenerator } from './idGenerator';
import { MdDelete } from "react-icons/md";

export const Designer = () => {
    const { elements, addElement } = useDesigner();

    const droppable = useDroppable({
        id: "designer-drop-area",
        data:{
            isDesignerDropArea:true,
        }
    })
    console.log(elements)
    useDndMonitor({
        onDragEnd:(event)=>{
            const {active,over} = event;
            if(!active || !over) return;
            const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
            if(isDesignerBtnElement){
                const type = active.data?.current?.type;
                const newElement = WebElement[type].construct(
                    idGenerator()
                );
                addElement(0,newElement)
            }
        }
    })
  return (
    <div className='flex w-full h-full'>
        <div className='p-4 w-full'>
            <div ref={droppable.setNodeRef} className='bg-slate-900 max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto'>
                {!droppable.isOver&& elements.length == 0 &&(<p className='text-3xl flex flex-grow items-center font-bold'>Drop here</p>)}
            {droppable.isOver &&(
                <div className='p-4 w-full'>
                    <div className='h-[120px] rounded-md bg-slate-600'>
                        
                    </div>
                    </div> 
            )}
            {elements.length >0 &&(
    <div className='flex flex-col w-full gap-2 p-4'>
    {elements.map(element =>(
        <DesignerElementWrapper key={element.id} element={element}/>
    ))}
    </div>
)}
            </div>
            

        </div>
        <Siderbar/>
    </div>
  )
}

function DesignerElementWrapper({element}){
    const {removeElement} = useDesigner();
    const [isMouseOver, setIsMouseOver] = useState(false);
    const DesignerElement = WebElement[element.type]?.designerComponent;
    const topdropable = useDroppable({
        id: element.id + '-top',
        data:{
            type: element.type,
            elementId: element.id,
            isTopHalfDesignerElement: true
        }
    })
    const bottomdropable = useDroppable({
        id: element.id + '-bottom',
        data:{
            type: element.type,
            elementId: element.id,
            isBottomHalfDesignerElement: true
        }
    })
    const draggable = useDraggable({
        id: element.id + '-drag-handler',
        data:{
            type:element.type,
            elementId: element.id,
            isDesignerElement:true,
        }
    })
    if(draggable.isDragging) return null;
    return<div 
    ref = {draggable.node}
    {...draggable.listeners}
    {...draggable.attributes}
    className='flex flex-col w-full relative'
    onMouseEnter={() => setIsMouseOver(true)}
    onMouseLeave={() => setIsMouseOver(false)}
  >
    <div
      ref={topdropable.node}
      className={`absolute h-1/2 w-full rounded-md ${
        topdropable.isOver ? '' : ''
      }`}
    ></div>
    <div
      ref={bottomdropable.node}
      className={`absolute h-1/2 w-full rounded-md ${
        bottomdropable.isOver ? 'bg-red-400' : ''
      }`}
    ></div>

    {isMouseOver && (
      <div className='absolute right-0 h-full'>
        <button
          className='flex h-full bg-red-800 rounded-md items-center'
          onClick={() => removeElement(element.id)}
        >
          <MdDelete className='h-6 w-10' />
        </button>
      </div>
    )}

    <DesignerElement WebInstance={element} />
  </div>
    
}
