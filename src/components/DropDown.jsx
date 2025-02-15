import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from 'framer-motion';

export const DropDown = ({ children, label }) => {
    const [show, setShow] = useState(true);

    return (
        <>  
            <div className='flex flex-row justify-between items-center w-full cursor-pointer' 
                onClick={() => setShow(!show)}
            >
                <p className='text-lg font-bold'>{label}</p>
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
                {children}
            </motion.div>
        </>
    )
}