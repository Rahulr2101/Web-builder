import React from 'react'
import { useDesigner } from './hooks/useDesigner'
import { WebElement } from './Webelement'
import { BsXLg } from "react-icons/bs";


export const Propertiesbar = () => {
  const {selectedElement,setSelectedElement} = useDesigner()
  const PropertiesComponent = WebElement[selectedElement.type].propertiesComponent
  return (
    <div className='flex flex-col p-2'>
      <div className='flex justify-between items-center'>
        <p className='text-sm'>
          Component Properties
          </p>
          <button onClick={()=>{
            setSelectedElement(null)
          }}>
          <BsXLg />
          </button>
         
          </div>
          <PropertiesComponent WebInstance = {selectedElement}/>

     
    </div>
   
  )
}
