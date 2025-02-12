import React from 'react'
import { MdOutlineTextFields } from "react-icons/md";
const type = "TextField";
export const TextFieldElement = {
    type,
    construct: (id) =>({
        id,
        type,
        extraAttributes:{
            label:"Text field",
            helperText: "Helper text",
            required: false,
            placeHolder: "Value here..."
        }
    }),
    designerBtnElement: {
        icon:MdOutlineTextFields,
        label:"Text Field",
    },
    designerComponent: DesignerComponent,
    formComponent: () => <div className='text-white'>Form component</div>,
    propertiesComponent: () => <div>Properties component</div>,
}

function DesignerComponent({WebInstance}){
    return <div className='flex flex-col border-2 border-white'>
        <p>{WebInstance.extraAttributes.helperText}</p>
        <input
                id="my-input"
                type="text"
            
                placeholder="Type something..."
                className="mt-1 p-2 border rounded-md w-full"
            />
    </div>
}