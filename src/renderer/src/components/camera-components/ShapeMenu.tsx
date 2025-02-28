import { useCamera } from '@renderer/store/store'

interface ShapeMenuProps {
  setOpenShapeMenu: (open: boolean) => void
  setDefaultMenu: (open: boolean) => void
}

const ShapeMenu = ({ setOpenShapeMenu, setDefaultMenu }: ShapeMenuProps) => {
  const { shape, setShape } = useCamera()
  const handleMenu = () => {
    setDefaultMenu(true)
    setOpenShapeMenu(false)
  }

  const handleShapeChange = (shape: 'circle' | 'square' | 'rectangle') => {
    window.electron.ipcRenderer.send('change-camera-shape', shape)
    setShape(shape)
  }

  return (
    <div className=" space-y-2">
      <div className="text-white w-[44px] text-[20px] bg-[#3B4956] rounded-[8px] font-bold flex flex-col">
        {/* circle button */}
        <button
          onClick={() => handleShapeChange('circle')}
          className={`${shape === 'circle' ? 'bg-[#0D6EE0]' : ''} w-[44px] h-[44px] flex justify-center items-center mb-[2px] rounded-[8px] py-[6px] hover:bg-[#212339] transition-all duration-200`}
        >
          <div className="w-[24px] h-[24px] bg-white rounded-full"></div>
        </button>
        <div className="bg-[#4A5C6C] w-[30px] mx-auto h-[1.5px]"></div>
        {/* square button */}
        <button
          onClick={() => handleShapeChange('square')}
          className={`${shape === 'square' ? 'bg-[#0D6EE0]' : ''} w-[44px] h-[44px] flex justify-center items-center mb-[2px] rounded-[8px] py-[6px] hover:bg-[#212339] transition-all duration-200`}
        >
          <div className="w-[24px] h-[24px] bg-white"></div>
        </button>
        <div className="bg-[#4A5C6C] w-[30px] mx-auto h-[1.5px]"></div>
        {/* rectangle button */}
        <button
          onClick={() => handleShapeChange('rectangle')}
          className={` ${shape === 'rectangle' ? 'bg-[#0D6EE0]' : ''} w-[44px] h-[44px] flex justify-center items-center mb-[2px] rounded-[8px] py-[6px] hover:bg-[#212339] transition-all duration-200`}
        >
          <div className="w-[24px] h-[32px] bg-white"></div>
        </button>
      </div>

      <button
        onClick={handleMenu}
        className="hover:bg-[#212339] w-full flex justify-center items-center py-[6px] rounded-[8px] transition-all duration-200"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7624 15L22.1374 9.63749C22.3728 9.40211 22.505 9.08286 22.505 8.74999C22.505 8.41711 22.3728 8.09787 22.1374 7.86249C21.902 7.62711 21.5828 7.49487 21.2499 7.49487C20.917 7.49487 20.5978 7.62711 20.3624 7.86249L14.9999 13.2375L9.63742 7.86249C9.40204 7.62711 9.0828 7.49487 8.74992 7.49487C8.41705 7.49487 8.0978 7.62711 7.86242 7.86249C7.62704 8.09787 7.49481 8.41711 7.49481 8.74999C7.49481 9.08286 7.62704 9.40211 7.86242 9.63749L13.2374 15L7.86242 20.3625C7.74526 20.4787 7.65227 20.6169 7.58881 20.7693C7.52535 20.9216 7.49268 21.085 7.49268 21.25C7.49268 21.415 7.52535 21.5784 7.58881 21.7307C7.65227 21.883 7.74526 22.0213 7.86242 22.1375C7.97863 22.2546 8.11688 22.3476 8.2692 22.4111C8.42153 22.4746 8.58491 22.5072 8.74992 22.5072C8.91494 22.5072 9.07832 22.4746 9.23064 22.4111C9.38297 22.3476 9.52122 22.2546 9.63742 22.1375L14.9999 16.7625L20.3624 22.1375C20.4786 22.2546 20.6169 22.3476 20.7692 22.4111C20.9215 22.4746 21.0849 22.5072 21.2499 22.5072C21.4149 22.5072 21.5783 22.4746 21.7306 22.4111C21.883 22.3476 22.0212 22.2546 22.1374 22.1375C22.2546 22.0213 22.3476 21.883 22.411 21.7307C22.4745 21.5784 22.5072 21.415 22.5072 21.25C22.5072 21.085 22.4745 20.9216 22.411 20.7693C22.3476 20.6169 22.2546 20.4787 22.1374 20.3625L16.7624 15Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  )
}
export default ShapeMenu
