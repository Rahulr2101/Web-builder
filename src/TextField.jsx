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

function DesignerComponent({ WebInstance }) {
    const element = WebInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;

    return (
        <div className="flex flex-col gap-1 w-full">
           
            <label className="text-sm font-semibold text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type="text"
                placeholder={placeHolder}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 
                           shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed 
                           transition-all ease-in-out duration-200"
            />

            
            {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
        </div>
    );
}

