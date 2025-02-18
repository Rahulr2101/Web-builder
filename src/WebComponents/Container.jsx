import { IoSquareOutline } from "react-icons/io5";
const type = "Container"
export const ContainerElement = {
     type,
        construct: (id) =>({
            id,
            type,
            extraAttributes:{
               width:"w-[100px] min-w-20",
               height:"w-[100px] min-h-20",
               parent:"0"
            }
        }),
        designerBtnElement: {
            icon:IoSquareOutline,
            label:"Container",
        },
        designerComponent: DesignerComponent,
        formComponent: () => <div className='text-white'>Form component</div>,
        propertiesComponent:PropertiesComponet
}

function DesignerComponent({WebInstance}){
    const element = WebInstance
    return(
        <div className="flex flex-col items-center border-2 border-dashed w-min rounded-md p-2">Container</div>
    )
}

function PropertiesComponet(){
    return <h1>PropertiesComponent</h1>
}