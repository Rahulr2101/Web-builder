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
    DesignerComponent: () => <div>Designer component</div>,
    formComponent: () => <div>Form component</div>,
    propertiesComponent: () => <div>Properties component</div>,
}