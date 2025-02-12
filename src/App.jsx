import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Designer } from './designer'
import { Siderbar } from './sidebar'
import { DndContext } from '@dnd-kit/core'
import { DragOverlayWrapper} from './dragoverlaywrapper'
function App() {
  return (
    <DndContext>

      <main className='h-screen flex flex-row text-white'>
        <div className='flex flex-col bg-[url(/paper.svg)] w-full h-full'>
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}

export default App
