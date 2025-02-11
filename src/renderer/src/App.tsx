// App.tsx
import { useState } from 'react'
import Menu from './components/Menu'
import ResizeMenu from './components/camera-components/ResizeMenu'
import ShapeMenu from './components/camera-components/ShapeMenu'
import BorderMenu from './components/border-components/BorderMenu'

function App(): JSX.Element {
  const [defaultMenu, setDefaultMenu] = useState(true)
  const [openResizeMenu, setOpenResizeMenu] = useState(false)
  const [openShapeMenu, setOpenShapeMenu] = useState(false)
  const [openBorderMenu, setOpenBorderMenu] = useState(false)
  return (
    <main className="bg-[#293845] flex justify-center items-center relative rounded-2xl h-screen overflow-hidden">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />

      <div className="relative z-10">
        <div className={`${defaultMenu ? '' : 'hidden'}`}>
          <Menu
            setOpenResizeMenu={setOpenResizeMenu}
            setDefaultMenu={setDefaultMenu}
            setOpenShapeMenu={setOpenShapeMenu}
            setOpenBorderMenu={setOpenBorderMenu}
          />
        </div>

        <div className={`${openResizeMenu ? '' : 'hidden'}`}>
          <ResizeMenu setDefaultMenu={setDefaultMenu} setOpenResizeMenu={setOpenResizeMenu} />
        </div>

        <div className={`${openShapeMenu ? '' : 'hidden'}`}>
          <ShapeMenu setDefaultMenu={setDefaultMenu} setOpenShapeMenu={setOpenShapeMenu} />
        </div>

        <div className={`${openBorderMenu ? '' : 'hidden'}`}>
          <BorderMenu setDefaultMenu={setDefaultMenu} setOpenBorderMenu={setOpenBorderMenu} />
        </div>
      </div>
    </main>
  )
}

export default App
