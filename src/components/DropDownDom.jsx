import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { RiArrowDropDownLine } from "react-icons/ri";
import { WebElement} from '../Webelement';
import { label } from 'framer-motion/client';
export const DropDownDom = ({children,flexElement}) => {
const [show, setShow] = useState(true);
console.log(flexElement.type)
const {icon:Icon,label} = WebElement[flexElement.type].designerBtnElement
console.log(label)
  return (
   
    <>  
            <div className='flex flex-row gap-4 items-center justify-between cursor-pointer' 
                onClick={() => setShow(!show)}
            >
                {/* <Icon/> */}
                <div className='flex flex-row gap-4 items-center'> 
                <Icon/>
                <p className='text-md font-medium'>{label}</p>
                </div>
                
                <motion.div 
                    animate={{ rotate: show ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <RiArrowDropDownLine size={24} />
                </motion.div>
            </div>

            <motion.div 
                
                animate={{ opacity: show ? 1 : 0, height: show ? "auto" : 0, width:"full" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full flex flex-col gap-2"
            >
                <div className='p-2'>
                {children}
                </div>
               
            </motion.div>
        </>
  )
}
