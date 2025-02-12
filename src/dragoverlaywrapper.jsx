import { useDndMonitor } from '@dnd-kit/core'
import React, { useEffect } from 'react'

export const DragOverlayWrapper = () => {
    useDndMonitor ({
        onDragStart:(event) =>{
            console.log("sjdk",event)
        }
    })
    useEffect(()=>{
        console.log("hello loaded")
    },[])
  return (
    <div>dragoverlaywrapper</div>
  )
}
