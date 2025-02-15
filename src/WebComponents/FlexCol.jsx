import { useDroppable } from "@dnd-kit/core";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

const type = "FlexCol"
export const FlexColElement = {
    type,
    construct:(id) =>({
        id,
        type,
        extraAttributes:{
            gap:"0",
            justify:"justify-start",
            item:"item-start"
        }
    }),
    designerBtnElement:{
        icon:TfiLayoutColumn3Alt,
        label:"Flex Column"
    },
    designerComponent:designerComponent,
    formComponent:() =><h1>formComponent Flex</h1>,
    propertiesComponent:() =><h1>propertiesComponent Flex</h1>
}

function designerComponent({WebInstance}){
    const element = WebInstance
    const {gap,justify,item} = element.extraAttributes
    const dropable = useDroppable({
        id: element.id + '-flexcol',
        data:{
            type: element.type,
            elementId: element.id,
            isFlexCol:true
        }
    })
    return(
        <div ref={dropable.node} className={`flex-col ${gap} ${justify} ${item}`} >
            <div className="w-full h-full">
                Drop here
            </div>
        </div>
    )
}