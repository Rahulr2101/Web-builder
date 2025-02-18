import React, { useEffect } from 'react'
import { useDesigner } from './hooks/useDesigner'
import { DropDownDom } from './components/DropDownDom'
import { WebElement } from './Webelement'
import { DropDown } from './components/DropDown'
import { LuSquareDashed } from "react-icons/lu";
export const Dom = () => {
  const{elements,flexCol} = useDesigner()
  return (
    <div className='flex flex-col gap-3 '>
        <p className='text-lg font-bold'>Dom</p>
        <p className='text-xs font-light'>View the Designer in a tree like structure.</p>
        <div className="my-1 -mx-4">
        <hr className="border-t-2 border-border border-solid" />
        </div>
       
        <DropDown label={'Body'} icon={LuSquareDashed}>

       
        {elements.map((el) => {
        if (el.type === "FlexCol" || el.type === "FlexRow") {
          return (
            <div key={el.id} className='p-2'>
                <DropDownDom flexElement={el}>
                    {flexCol[el.id]?.map((flexEl) => {
                        const {icon:Icon,label} = WebElement[flexEl.type].designerBtnElement
                        return(
                          <div className='flex flex-col gap-1'>
                             <div className=" -mx-4">
        <hr className="border-t-2 border-border border-solid" />
        </div>
                            <div className="flex flex-row gap-2  items-center">
                            
                            <Icon/>
                            <div key={flexEl.id}>{label}</div>
                          </div>
                         
                          </div>
                         
                      )
        })}
                </DropDownDom>
            </div>
          );
        }
        const {icon:Icon,label} = WebElement[el.type].designerBtnElement
        return (
        <div className='flex flex-col justify-center h-full'>
        <div key={el.id} className='flex flex-row gap-2 items-center h-full '>
          <Icon/>
          {label}        
          </div>
         
        <hr className="border-t-2 border-border border-solid  -mx-4" />
      
          </div>
        )
          
        })}

       
</DropDown>
    </div>
  )
}
