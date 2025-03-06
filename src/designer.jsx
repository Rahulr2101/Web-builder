import React, { act, useEffect, useState } from "react";
import { Siderbar } from "./sidebar";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import { useDesigner } from "./hooks/useDesigner";
import { WebElement } from "./Webelement";
import { idGenerator } from "./idGenerator";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


export const Designer = ({elemenstVar,flexColVar}) => {
  const {
    elements,
    addElement,
    setSelectedElement,
    selectedElement,
    flexCol,
    removeElement,
    addFlexColElement,
    removeElementCol,
    removeElementFlex
  } = useDesigner();

 

  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isFlexColOver = over.data.current.isFlexCol;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      const isDroppingOverDesigner = over.data.current.isDesignerDropArea;

      const isNewFlexColElement = isFlexColOver && isDesignerBtnElement;
      const isElementDragging = active.data.current.isDesignerElement;
      const isDroppingOverCol = isFlexColOver && isElementDragging
      if (isNewFlexColElement) {
        const overId = over.data.current.elementId;
        const type = active.data.current.type;
        const newElement = WebElement[type].construct(idGenerator());
        newElement.extraAttributes.parent = overId;
        const flex_length = flexCol[overId] ? flexCol[overId].length : 0;
        addFlexColElement(overId, flex_length, newElement);
        return;
      }

      if(isDroppingOverCol){
        const overId = over.data.current.elementId
        const childId = active.data.current.elementId;
        const activeElementIndex = elements.findIndex((el)=> el.id === childId)
        const activeElement = elements[activeElementIndex];
        activeElement.extraAttributes.parent = overId
        const flex_length = flexCol[overId] ? flexCol[overId].length : 0;
        addFlexColElement(overId,flex_length,activeElement)
        removeElement(childId)

      }

      if (isDesignerBtnElement && isDroppingOverDesigner) {
        const type = active.data.current.type;
        const newElement = WebElement[type].construct(idGenerator());
        addElement(elements.length, newElement);
        return;
      }
      const isDroppingOverDesignerElementTop =
        over.data.current.isTopHalfDesignerElement;
      const isDroppingOverDesignerElementBottom =
        over.data.current.isBottomHalfDesignerElement;

      const isDroppingOverDesignerElement =
        isDroppingOverDesignerElementBottom || isDroppingOverDesignerElementTop;

      const droppingSidebtnOverDesignerElement =
        isDesignerBtnElement && isDroppingOverDesignerElement;
      if (droppingSidebtnOverDesignerElement) {
        const type = active.data.current.type;
        const newElement = WebElement[type].construct(idGenerator());
        const overElementIndex = elements.findIndex(
          (el) => el.id === over.data.current.elementId
        );

        let indexOfNewElement = overElementIndex;

        if (isDroppingOverDesignerElementBottom) {
          indexOfNewElement = indexOfNewElement + 1;
        }
        addElement(indexOfNewElement, newElement);
      }
      
      const droppingElementOverElement =
        isDroppingOverDesignerElement && isElementDragging;

      if (droppingElementOverElement) {
        const activeId = active.data.current.elementId;
        const parentId = active.data.current.parent;

        if (parentId !== "0") {
          const activeElementIndex = flexCol[parentId].findIndex(
            (el) => el.id === activeId
          );
          const overElementIndex = elements.findIndex(
            (el) => el.id === over.data.current.elementId
          );
          const activeElement = { ...flexCol[parentId][activeElementIndex] };
          removeElementCol(parentId, activeId);
          let indexOfActiveElement = overElementIndex;
          activeElement.extraAttributes.parent = "0"
          if (isDroppingOverDesignerElementBottom) {
            indexOfActiveElement = indexOfActiveElement + 1;
          }
          addElement(indexOfActiveElement, activeElement);
          return;
        }
        const activeElementIndex = elements.findIndex(
          (el) => el.id === activeId
        );

        const overElementIndex = elements.findIndex(
          (el) => el.id === over.data.current.elementId
        );
        const activeElement = { ...elements[activeElementIndex] };
        removeElement(activeId);
        let indexOfActiveElement = overElementIndex;
        if (isDroppingOverDesignerElementBottom) {
          indexOfActiveElement = indexOfActiveElement + 1;
        }
        addElement(indexOfActiveElement, activeElement);
      }
    },
  });
  return (
    <div className="flex w-full h-full ">
      <div
        className="w-full"
        onClick={() => {
          setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={`bg-primary p-2  h-full  flex flex-col flex-grow items-center justify-start flex-1  `}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-3xl flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col w-full gap-2 ">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Siderbar />
    </div>
  );
};

export function DesignerElementWrapper({ element }) {
  const { removeElement, selectedElement, setSelectedElement,removeElementCol } = useDesigner();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const DesignerElement = WebElement[element.type]?.designerComponent;
  const topdropable = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomdropable = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });
  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
      parent: element.extraAttributes.parent,
    },
  });
  if (draggable.isDragging) return null;
  return (
    <div
      ref={draggable.node}
      {...draggable.listeners}
      {...draggable.attributes}
      className="flex flex-col  relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
    >
      <div
        ref={topdropable.node}
        className={`absolute h-1 w-full rounded-md `}
      ></div>
      <div
        ref={bottomdropable.node}
        className={`absolute h-1 w-full rounded-md bottom-0   `}
      ></div>

      {isMouseOver && (
        <div className={`absolute right-0 h-full`}>
          <button
            className="flex h-full bg-red-800 rounded-md items-center"
            onClick={(e) => {
              e.stopPropagation();
              if(element['extraAttributes'].parent === '0'){
                removeElement(element.id);
              }else{
                removeElementCol(element['extraAttributes'].parent,element.id)
              }
            }}
          >
            <MdDelete className="h-6 w-10" />
          </button>
        </div>
      )}
      {topdropable.isOver && (
        <div className="border-t-2 border-white rounded-t-md" />
      )}

      <DesignerElement WebInstance={element} />

      {bottomdropable.isOver && (
        <div className="border-b-2 border-white rounded-b-2" />
      )}
    </div>
  );
}
