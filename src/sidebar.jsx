import React, { useEffect } from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'
import { Propertiesbar } from './propertiesbar'
import { WebComponents } from './webComponents'
import { useDesigner } from './hooks/useDesigner'
import { SideMenu } from './SideMenu'
import { CiSettings } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
export const Siderbar = () => {
  const {selectedElement} = useDesigner()

  return (
    <aside className='w-[400px] max-w-[400px] flex flex-row flex-grow   bg-secondary border-l-2 border-border overflow-y-auto h-full'>
     
      <div className='flex flex-col p-4 '>
   {
    selectedElement && <Propertiesbar/>
   }
   {
    !selectedElement && <WebComponents/>
   }
   </div>
   <div className='flex flex-col  min-w-[50px] max-w-[50px] border-l-2 p-4 gap-10 border-border items-center '>
   
   <IoIosAdd size={32} className={`${!selectedElement && 'bg-accent rounded-md w-[32px]'}`}/>
   <CiSettings size={32}  className={`${selectedElement && 'bg-accent rounded-md w-[32px] h-[32px] '}`}/>
   <GoStack size={24} />
  
</div>
    </aside>
  ) 
}
