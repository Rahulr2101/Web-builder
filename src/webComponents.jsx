import React from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'

export const WebComponents = () => {
  return (
            <>
           <p className='text-lg font-bold'>Input Field</p>
            <SidarBtnElement webElement = {WebElement.TextField}/>
            <div className="my-1 -mx-4">
                <hr className="!m-0 border-t-2 border-border border-solid" />
            </div>  
            <p className='text-lg font-bold'>Layout Orientation</p>
            <p className='text-xs font-light'>A setting that defines how content is arranged within a container.</p>
            <SidarBtnElement webElement={WebElement.FlexCol}/>
            <SidarBtnElement webElement={WebElement.FlexRow}/>
            </>
  )
}
