import React, { useEffect } from 'react'
import { LiaAvianex } from 'react-icons/lia';
import { MdOutlineTextFields } from "react-icons/md";
import { useDesigner } from '../hooks/useDesigner';
const type = "TextField";
import { useForm } from 'react-hook-form';
import HelperTextInput from '../components/HelperTextInput'

export const TextFieldElement = {
    type,
    construct: (id) =>({
        id,
        type,
        extraAttributes:{
            label:"Text",
            helperText: "Helper text",
            required: false,
            placeHolder: "Value here...",
            parent:"0"
        }
    }),
    designerBtnElement: {
        icon:MdOutlineTextFields,
        label:"Text",
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
            helperText:element.helperText,
            parent:element.parent
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
                required:values.required,
                parent:values.parent

            }
        })
    }


    return(
        <div className='flex flex-col'>
          <form onBlur={form.handleSubmit(applyChanges)} onSubmit={(e)=>{
            e.preventDefault();
           
          }} className="flex flex-col p-4 space-y-4">
            <HelperTextInput
                    register={form.register}
                    name="label"
                    label="Label"
                />
            <HelperTextInput
                    register={form.register}
                    name="placeHolder"
                    label="Placeholder"
                />
            <HelperTextInput
                    register={form.register}
                    name="helperText"
                    label="Helper Text"
                />
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

