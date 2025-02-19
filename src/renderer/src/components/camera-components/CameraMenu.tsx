import { createRoot } from 'react-dom/client'
import '../../assets/main.css'
import { CameraProvider } from '@renderer/store/store'

const CameraMenu = () => {
  return (
    <div className="w-[213px] h-[88px] flex justify-center items-center bg-[#293845] relative">
      {/* Draggable title bar */}
      <div
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
        className="h-6 absolute top-0 left-0 right-0"
      />
    </div>
  )
}

const root = document.getElementById('cam-root')
if (root) {
  createRoot(root).render(
    <CameraProvider>
      <CameraMenu />
    </CameraProvider>
  )
}
