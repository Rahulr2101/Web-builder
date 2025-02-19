import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Designer } from "./designer";
import { Siderbar } from "./sidebar";
import {
  DndContext,
  MouseSensor,
  useSensors,
  useSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { DragOverlayWrapper } from "./dragoverlaywrapper";

function App() {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  return (
    <DndContext sensors={sensors}>
      <main className="h-full  bg-primary flex flex-row text-white">
        <div className="flex flex-col  w-full h-full">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default App;
