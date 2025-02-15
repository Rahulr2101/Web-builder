import { IoSquareOutline } from "react-icons/io5";

export const ContainerElement = {
     type,
        construct: (id) =>({
            id,
            type,
            extraAttributes:{
               width:"w-[100px] min-w-20",
               height:"w-[100px] min-h-20"
            }
        }),
        designerBtnElement: {
            icon:IoSquareOutline,
            label:"Container    ",
        },
        designerComponent: DesignerComponent,
        formComponent: () => <div className='text-white'>Form component</div>,
        propertiesComponent:PropertiesComponet
}