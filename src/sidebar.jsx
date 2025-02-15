import React, { useEffect } from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'
import { Propertiesbar } from './propertiesbar'
import { WebComponents } from './webComponents'
import { useDesigner } from './hooks/useDesigner'
export const Siderbar = () => {
  const {selectedElement} = useDesigner()

  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-0 p-4 bg-secondary border-l-2 border-border overflow-y-auto h-full'>
   {
    selectedElement && <Propertiesbar/>
   }
   {
    !selectedElement && <WebComponents/>
   }
    </aside>
  )
}
