import { useDroppable } from "@dnd-kit/core";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { useDesigner } from "../hooks/useDesigner";
import { DesignerElementWrapper } from "../designer";

const type = "FlexCol"
export const FlexColElement = {
    type,
    construct:(id) =>({
        id,
        type,
        extraAttributes:{
            gap:"gap-2",
            justify:"justify-start",
            item:"item-start",
            parent:"0"
        }
    }),
    designerBtnElement:{
        icon:TfiLayoutColumn3Alt,
        label:"Column"
    },
    designerComponent:designerComponent,
    formComponent:() =><h1>formComponent Flex</h1>,
    propertiesComponent:() =><h1>propertiesComponent Flex</h1>
}

function designerComponent({WebInstance}){
    const {flexCol} = useDesigner()
    const element = WebInstance
    const {gap,justify,item} = element.extraAttributes
    const dropable = useDroppable({
        id: element.id + '-flexcol',
        data:{
            type: element.type,
            elementId: element.id,
            isFlexCol:true,
            parent: element.extraAttributes.parent
        }
    })
    return(
        <div ref={dropable.node} className={`flex flex-col w-full flex-1 ${gap} ${justify} ${item} p-2 border-slate-600 border-2 rounded-md min-h-20`} >
            {(!flexCol[element.id] || flexCol[element.id].length === 0) && (
    <div className="w-full h-full">Drop here</div>
)}  
            {
                (flexCol[element.id] || []).map(element => (
                    <DesignerElementWrapper key={element.id} element={element} />
                ))
            }
        </div>
    )
}