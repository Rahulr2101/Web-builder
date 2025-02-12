import React from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'

export const Siderbar = () => {
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-0 p-4 bg-slate-900 overflow-y-auto h-full'>
        Elements
        <SidarBtnElement webElement = {WebElement.TextField}/>
    </aside>
  )
}
