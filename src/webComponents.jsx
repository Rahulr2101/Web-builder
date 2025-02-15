import React from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'
import { DropDown } from './components/DropDown'

export const WebComponents = () => {
  return (
            <>
            <DropDown label={"Input Field"}>
            <div className='flex flex-row gap-2 items-center'>
            <SidarBtnElement webElement = {WebElement.TextField}/>
            </div>
            </DropDown>
            <div className="my-1 -mx-4">
                <hr className="!m-0 border-t-2 border-border border-solid" />
            </div>
            <DropDown label={"Layout Orientation"}>
            <p className='text-xs font-light'>A setting that defines how content is arranged within a container.</p>
            <div className='flex flex-row gap-2'>
            <SidarBtnElement webElement={WebElement.FlexCol}/>
            <SidarBtnElement webElement={WebElement.FlexRow}/>
            </div>
           
            </DropDown>
            <div className="my-1 -mx-4">
                <hr className="!m-0 border-t-2 border-border border-solid" />
            </div>
          
            </>
  )
}
