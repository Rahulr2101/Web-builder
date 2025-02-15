import React from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'
import { DropDown } from './components/DropDown'

export const WebComponents = () => {
  return (
            <>
            <DropDown label={"Input Field"}>
            <SidarBtnElement webElement = {WebElement.TextField}/>
            </DropDown>
            <div className="my-1 -mx-4">
                <hr className="!m-0 border-t-2 border-border border-solid" />
            </div>
            <DropDown label={"Layout Orientation"}>
            <p className='text-xs font-light'>A setting that defines how content is arranged within a container.</p>
            <SidarBtnElement webElement={WebElement.FlexCol}/>
            <SidarBtnElement webElement={WebElement.FlexRow}/>
            </DropDown>
            
          
            </>
  )
}
