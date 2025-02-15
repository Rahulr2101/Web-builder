import React from 'react'
import { WebElement } from './Webelement'
import { SidarBtnElement } from './SidarBtnElement'

export const WebComponents = () => {
  return (
            <>
            Elements
            <SidarBtnElement webElement = {WebElement.TextField}/>
            </>
  )
}
