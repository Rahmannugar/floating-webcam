import { createRoot } from 'react-dom/client'
import '../../assets/main.css'
import { CameraProvider, useCamera } from '@renderer/store/store'

const BorderStyleMenu = () => {
  const { borderStyle, setBorderStyle } = useCamera()
  const handleChangeBorderStyle = (
    style: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
  ) => {
    window.electron.ipcRenderer.send('change-camera-style', style)
    setBorderStyle(style)
  }

  return (
    <div className="w-[123px] h-[304px] p-3 bg-[#293845] relative text-white">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />
      <div id="sharp"></div>
      <div className="flex flex-col space-y-3">
        {/* solid button */}
        <button
          onClick={() => handleChangeBorderStyle('solid')}
          className={`${borderStyle === 'solid' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Solid
        </button>
        {/* dashed button */}
        <button
          onClick={() => handleChangeBorderStyle('dashed')}
          className={`${borderStyle === 'dashed' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Dashed
        </button>
        {/* dotted button */}
        <button
          onClick={() => handleChangeBorderStyle('dotted')}
          className={`${borderStyle === 'dotted' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Dotted
        </button>
        {/* double button */}
        <button
          onClick={() => handleChangeBorderStyle('double')}
          className={`${borderStyle === 'double' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Double
        </button>
        {/* groove button */}
        <button
          onClick={() => handleChangeBorderStyle('groove')}
          className={`${borderStyle === 'groove' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Groove
        </button>
        {/* ridge button */}
        <button
          onClick={() => handleChangeBorderStyle('ridge')}
          className={`${borderStyle === 'ridge' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Ridge
        </button>
        {/* inset button */}
        <button
          onClick={() => handleChangeBorderStyle('inset')}
          className={`${borderStyle === 'inset' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Inset
        </button>
        {/* outset button */}
        <button
          onClick={() => handleChangeBorderStyle('outset')}
          className={`${borderStyle === 'outset' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Outset
        </button>
      </div>
    </div>
  )
}

const root = document.getElementById('border-style-root')
if (root) {
  createRoot(root).render(
    <CameraProvider>
      <BorderStyleMenu />
    </CameraProvider>
  )
}
