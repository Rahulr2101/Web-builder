import React, { useEffect } from 'react'
import { LiaAvianex } from 'react-icons/lia';
import { MdOutlineTextFields } from "react-icons/md";
import { useDesigner } from './hooks/useDesigner';
const type = "TextField";
import { useForm } from 'react-hook-form';

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
    propertiesComponent:PropertiesComponet
}
function PropertiesComponet({WebInstance}){
    const element = WebInstance
    const {updateElement} = useDesigner()
    const {label,required,placeHolder,helperText} = element.extraAttributes;

    const form = useForm({
        mode:"onBlur",
        defaultValues:{
            label: element.label,
            required: element.required,
            placeHolder:element.placeHolder,
            helperText:element.helperText
        }
    })
    useEffect(()=>{
        form.reset(element.extraAttributes)
    },[element,form])
   
    function applyChanges(values){
        updateElement(element.id,{
            ...element,
            extraAttributes:{
                label:values.label,
                helperText: values.helperText,
                placeHolder: values.placeHolder,
                required:values.required

            }
        })
    }
    console.log(label,required,placeHolder,helperText)

    return(
        <div className='flex flex-col'>
          <form onBlur={form.handleSubmit(applyChanges)} onSubmit={(e)=>{
            e.preventDefault();
          }} className="flex flex-col p-4 space-y-4">
            {/* Label Field */}
            <div>
                <label className="text-white">Label</label>
                <input
                    {...form.register("label")}
                    type="text"
                    className="mt-1 p-2 w-full rounded-md text-gray-700"
                    onKeyDown={(e)=>{
                        if(e.key === "Enter") e.currentTarget.blur();
                    }}
                />
            </div>

            {/* Placeholder Field */}
            <div>
                <label className="text-white">Placeholder</label>
                <input
                    {...form.register("placeHolder")}
                    type="text"
                    className="mt-1 p-2 w-full rounded-md text-gray-700"
                    onKeyDown={(e)=>{
                        if(e.key === "Enter") e.currentTarget.blur();
                    }}
                />
            </div>
            <div>
                <label className="text-white">Helper Text</label>
                <input
                    {...form.register("helperText")}
                    type="text"
                    className="mt-1 p-2 w-full rounded-md text-gray-700"
                    onKeyDown={(e)=>{
                        if(e.key === "Enter") e.currentTarget.blur();
                    }}
                />
            </div>
        </form>
        </div>
    )
}
function DesignerComponent({ WebInstance }) {
    const element = WebInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;

    return (
        <div className="flex flex-col gap-1 w-full bg-slate-600 rounded-md p-2">
           
            <label className="text-sm font-semibold text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type="text"
                placeholder={placeHolder}
                className="w-full p-3 border border-slate-900 rounded-lg  text-slate-300
                           shadow-sm focus:ring-2 
                       
                           transition-all ease-in-out duration-200"
            />

            
            {helperText && <p className="text-xs text-slate-300">{helperText}</p>}
        </div>
    );
}

