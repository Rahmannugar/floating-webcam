import { createRoot } from 'react-dom/client'
import '../../assets/main.css'
import { CameraProvider, useCamera } from '@renderer/store/store'

const FilterMenu = () => {
  const { filter, setFilter } = useCamera()
  const handleChangeFilter = (
    filter:
      | 'none'
      | 'blur(3px)'
      | 'brightness(1.3)'
      | 'brightness(2.3)'
      | 'contrast(150%)'
      | 'grayscale(100%)'
      | 'hue-rotate(180deg)'
      | 'invert(100%)'
      | 'opacity(50%)'
      | 'saturate(7)'
      | 'sepia(100%)'
      | 'drop-shadow(8px 8px 10px %s)'
  ) => {
    window.electron.ipcRenderer.send('change-camera-filter', filter)
    setFilter(filter)
  }

  return (
    <div className="window-menu w-[123px] h-[448px] p-3 bg-[#293845] relative text-white">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />
      <div id="sharp"></div>
      <div className="flex flex-col space-y-3">
        {/* none button */}
        <button
          onClick={() => handleChangeFilter('none')}
          className={`${filter === 'none' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          none
        </button>
        {/* blur(3px) button */}
        <button
          onClick={() => handleChangeFilter('blur(3px)')}
          className={`${filter === 'blur(3px)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Blurry
        </button>
        {/* brightness(1.3) button */}
        <button
          onClick={() => handleChangeFilter('brightness(1.3)')}
          className={`${filter === 'brightness(1.3)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Bright
        </button>
        {/* brightness(2.3) button */}
        <button
          onClick={() => handleChangeFilter('brightness(2.3)')}
          className={`${filter === 'brightness(2.3)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Brighter
        </button>
        {/* contrast(150%) button */}
        <button
          onClick={() => handleChangeFilter('contrast(150%)')}
          className={`${filter === 'contrast(150%)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Pop
        </button>
        {/* grayscale(100%) button */}
        <button
          onClick={() => handleChangeFilter('grayscale(100%)')}
          className={`${filter === 'grayscale(100%)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          No Color
        </button>
        {/* hue-rotate(180deg) button */}
        <button
          onClick={() => handleChangeFilter('hue-rotate(180deg)')}
          className={`${filter === 'hue-rotate(180deg)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Tolar (Anne)
        </button>
        {/* invert(100%) button */}
        <button
          onClick={() => handleChangeFilter('invert(100%)')}
          className={`${filter === 'invert(100%)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Ghost
        </button>
        {/* opacity(50%) button */}
        <button
          onClick={() => handleChangeFilter('opacity(50%)')}
          className={`${filter === 'opacity(50%)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Transparent
        </button>
        {/* saturate(7) button */}
        <button
          onClick={() => handleChangeFilter('saturate(7)')}
          className={`${filter === 'saturate(7)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Mars
        </button>
        {/* sepia(100%) button */}
        <button
          onClick={() => handleChangeFilter('sepia(100%)')}
          className={`${filter === 'sepia(100%)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Mexico
        </button>
        {/* drop-shadow(8px 8px 10px %s) button */}
        <button
          onClick={() => handleChangeFilter('drop-shadow(8px 8px 10px %s)')}
          className={`${filter === 'drop-shadow(8px 8px 10px %s)' ? 'bg-[#0D6EE0]' : ''} cursor-pointer hover:bg-[#212339] duration-200 transition-all`}
        >
          Shadow
        </button>
      </div>
    </div>
  )
}

const root = document.getElementById('filter-root')
if (root) {
  createRoot(root).render(
    <CameraProvider>
      <FilterMenu />
    </CameraProvider>
  )
}
