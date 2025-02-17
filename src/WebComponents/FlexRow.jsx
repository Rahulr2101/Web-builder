import { useDroppable } from "@dnd-kit/core";
import { GoRows } from "react-icons/go";    
import { useDesigner } from "../hooks/useDesigner";
import { DesignerElementWrapper } from "../designer";

const type = "FlexRow"
export const FlexRowElement = {
    type,
    construct:(id) =>({
        id,
        type,
        extraAttributes:{
            gap:"gap-2",
            justify:"justify-start",
            item:"item-start"
        }
    }),
    designerBtnElement:{
        icon:GoRows,
        label:"Row"
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
            isFlexCol:true
        }
    })
    return(
        <div ref={dropable.node} className={`flex flex-row w-full  ${gap} ${justify} ${item} p-2 border-slate-600 border-2 rounded-md min-h-20`} >
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